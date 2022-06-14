import Commit from 'components/Commit';
import NavigablePage from 'layouts/NavigablePage'
import IProps from "./IProps";
import {useGetCommitHistoryQuery} from 'services/reducers/gitApi';
import IError from 'services/types/Error'
import Loading from 'components/Commit/Loading';
import Error from 'components/ErrorComponent'; 
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const Repository = ({name,owner,repository}:IProps): JSX.Element => {
  const {data, isError, error, isLoading} = useGetCommitHistoryQuery({owner:owner,repository:repository});
  let toRender;
  if(data){
    toRender = data?.map((item,index) => {
    
      return <div key={item.code}  className='mb-6'>
                <Commit key={item.code} repository={repository} owner={owner} {...item}/>
              </div>
            
    })
  }

  if(isLoading){
    toRender =<Loading></Loading>
  }

  if(isError){
    const queryError = error as FetchBaseQueryError
    toRender=<Error errorMessage={(queryError.data as IError).error}></Error>
  }
  
  return (
    <>
      <NavigablePage>
        <header className="bg-white shadow">
          <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-6">
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          </div>
        </header>
        <main>
          <div className="max-w bg-gray-200 overflow-auto mx-auto py-6 sm:px-6 lg:px-8">
            {
              toRender
            }
            
          </div>
        </main>
      </NavigablePage>
    </>
  )
}
export default Repository;