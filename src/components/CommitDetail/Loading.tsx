const Loading = ():JSX.Element =>{
    return <>
        <div className="w-11/12  flex flex-col bg-white rounded overflow-hidden shadow-lg mb-6">
            <div className="px-6 py-2">
                <div className="w-1/2 mb-4 h-6 animate-pulse bg-gray-300"></div>
            </div>
        </div>
    </>
}

export default Loading;