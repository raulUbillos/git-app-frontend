import IProps from "./IProps"

const CommitDetail = (props: IProps):JSX.Element =>{
    return <>
        <div className="w-11/12  flex flex-col bg-white rounded overflow-hidden shadow-lg mb-6">
            <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2 pb-2 border-b-2">{props.filename}</div>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium 
                                text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Status: {props.status}
                </span>
            </div>
            <div className="pl-6 pb-2 flex-row">
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium 
                                text-green-500 bg-green-200 rounded dark:bg-green-700 dark:text-green-400">
                    Additions: {props.additions}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium 
                                text-yellow-500 bg-yellow-200 rounded dark:bg-yellow-700 dark:text-yellow-400">
                    Changes: {props.changes}
                </span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium 
                                text-red-500 bg-red-200 rounded dark:bg-red-700 dark:text-red-400">
                    Deletions: {props.deletions}
                </span>
            </div>
        </div>
    </>
}

export default CommitDetail