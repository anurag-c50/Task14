import React,{useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Header from './Components/main/Header';
import Footer from './Components/main/Footer';
import SignupPop from './Components/MenuComponent/SignupPop';
import SigninPop from './Components/MenuComponent/SigninPop';
export default function App() {
  const [NavmenuOtpion,setNavmenuOtpion]=useState({
    SignupPop:false,
    SigninPop:false,
  })
  useEffect(()=>{
    if(NavmenuOtpion.SignupPop||NavmenuOtpion.SigninPop){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  },[NavmenuOtpion])
  return (
     <>
    {NavmenuOtpion.SignupPop&&<SignupPop setNavmenuOtpion={setNavmenuOtpion} NavmenuOtpion={NavmenuOtpion}/>}
    {NavmenuOtpion.SigninPop&&<SigninPop setNavmenuOtpion={setNavmenuOtpion} NavmenuOtpion={NavmenuOtpion}/>}
    <div className={NavmenuOtpion.SignupPop?"Popupactive":""}>
     <Header NavmenuOtpion={NavmenuOtpion} setNavmenuOtpion={setNavmenuOtpion}></Header>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home NavmenuOtpion={NavmenuOtpion}/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>
    </>
  );
}
