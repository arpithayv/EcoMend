import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from './components/AppBar';
import { ethers } from 'ethers';
import ProjectGallery from './PhotoGallery.jsx';
import CreateProject from './CreateProject.jsx';
import './App.css'
import ParentComponent from './ParentComponent.jsx';

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
        <Route path={'/'} element={<ParentComponent/>}/>
        <Route path={'/projects'} element={<ProjectGallery/>}/>
        <Route path={'/create-project'} element={<CreateProject/>}/>
      </Routes>
    </BrowserRouter> 
  </div>
}

export default App
