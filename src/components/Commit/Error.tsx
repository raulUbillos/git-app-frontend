const Error = () => {
    return <>
    <div className="max-w flex flex-col bg-red-700 rounded overflow-hidden shadow-lg">
        <div className="px-6 py-2">
            <div className="font-bold text-red-400 text-xl mb-2 pb-2 border-b-2">Error</div>
        </div>
        <div className="pl-6 pb-2 flex-row">
            <div className="text-sm text-red-400">Couldn't load the commits</div>
        </div>
        
    </div>
    </>
}

export default Error;