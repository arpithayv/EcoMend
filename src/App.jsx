import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import AppBar from './components/AppBar';
import { ethers } from 'ethers';
import './App.css'

function App() {

  const [signer, setSigner] = useState('');


  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const sign = await provider.getSigner();
      setSigner(sign);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(()=>{
    isWalletConnected();
  }, [])


  return <div className='flex flex-col'>
    <AppBar signer={signer} setSigner={setSigner} isWalletConnected={isWalletConnected}/>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/projects'} element={<Projects/>}/>
      </Routes>
    </BrowserRouter> 
  </div>
}

export default App
