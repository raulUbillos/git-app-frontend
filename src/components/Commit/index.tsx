import useDetails from "hooks/useDetails";
import {  useEffect } from "react";
import IProps from "./IProps";

const Commit = (props:IProps) => {
    
    const {detailComponent,getCommitDetails} = useDetails();

    useEffect(() => {
        getCommitDetails(props.owner, props.repository, props.code)
    }, [getCommitDetails,props.owner, props.repository, props.code])


    return <>
        <div className="max-w flex flex-col bg-white rounded overflow-hidden shadow-lg mb-2">
            <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 pb-2 border-b-2">{props.message}</div>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <div className="text-sm text-gray-600">  Author: 
                    {props.author.avatarUrl&&
                        <img className="ml-1 w-5 h-5 rounded-full inline" 
                            src={props.author.avatarUrl} 
                            alt={props.author.name}
                        />} {props.author.name} {`<${props.author.email}>`}
                </div>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <p className="text-sm text-gray-600">Date Authored: {new Date(Date.parse(props.dateAuthored)).toDateString()}</p>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <div className="text-sm text-gray-600">Committer: 
                    {props.committer.avatarUrl&&
                        <img className="ml-1 w-5 h-5 rounded-full inline" 
                            src={props.committer.avatarUrl} 
                            alt={props.committer.name}
                        />} {props.committer.name} {`<${props.committer.email}>`}
                </div>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <p className="text-sm text-gray-600">Date Commited: {new Date(Date.parse(props.dateCommited)).toDateString()}</p>
            </div>
            <div className="flex flex-col items-center">
                    {
                        detailComponent
                    }
            </div>
        </div>
    </>
}

export default Commit;