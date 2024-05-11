
export default function AppBar({signer, setSigner, isWalletConnected}){

    function shortText(text){
        return text.slice(0, 4) + "..." +text.slice(-4);
    }


    return <div className='flex justify-between items-center p-3'>
        <p className='text-2xl'>app bar</p>
        { signer.address ? <div className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {shortText(signer.address)}
        </div> : <button onClick={()=>isWalletConnected()} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
            connect wallet
        </button> }
    </div>
}