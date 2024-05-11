import { Link } from "react-router-dom";

export default function AppBar({signer, setSigner, isWalletConnected}){

    function shortText(text){
        return text.slice(0, 4) + "..." +text.slice(-4);
    }


    return <div className='flex justify-between items-center p-4'>
        <div className='text-3xl'>Bar</div>
        <div className='flex gap-4 items-center'>
            <a href={'/projects'} className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>projects</a>
            <div>
                { signer.address ? <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    {shortText(signer.address)}
                </div> : <button onClick={()=>isWalletConnected()} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                    connect wallet
                </button> }
            </div>
        </div>
    </div>
}