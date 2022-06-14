import { useLazyGetCommitQuery } from "services/reducers/gitApi";
import Loading from "components/CommitDetail/Loading";
import CommitDetail from "components/CommitDetail";
import Error from "components/ErrorComponent";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import IError from "services/types/Error";

const useDetails = () => {
    const getCommit = useLazyGetCommitQuery();    
    const getCommitQuery = getCommit[0];
    const { isError,error,isLoading, isFetching, data} = getCommit[1];

    let detailComponent;

    if(isLoading){
        detailComponent = <Loading></Loading>
    }

    if(data){
        detailComponent = data.files.map(item => {
            return <CommitDetail key={`${item.filename}-${data.code}`} {...item}></CommitDetail>
        });
    }
    if(isError){
        const queryError = error as FetchBaseQueryError
        detailComponent=<Error errorMessage={(queryError.data as IError).error}></Error>
      }
    const getCommitDetails = async (owner:string, repository:string, commit:string) => {
        if(!isFetching && !data && !isError){
            getCommitQuery({
                commit,
                owner,
                repository
            });
        }
    }

    return {
        getCommitDetails,
        detailComponent
    }
}

export default useDetails;