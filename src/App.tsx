//import { useState } from 'react'
import CustomButton from "./menu/CustomButton";
import { useMediaQuery } from 'react-responsive';
import './App.css'
import { ViteGreeting } from './ViteGreeting'
import { ViteFooter } from './ViteFooter'
import { CopyrightApp } from './Copyright'
import { Routes, Route,useNavigate  } from "react-router-dom";
//import  { useEffect } from 'react';
import Menu from './menu/Pages'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const navigate = useNavigate();
  const menuPage1 = () => {
    navigate('/Pages');
    window.scrollTo(0, 6500);
  };
  const menuPage2 = () => {
    window.location.href = "mailto:houri%2dyatsurtony%2e%2e124568%40docomo%2ene%2ejp";
  };
  

  // useEffect(() => {
  //   if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') === -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
  //     navigate('/sp/index.html');
  //   }
  // }, [navigate]);

  return (
    <>
      <div className="container mx-auto flex justify-between items-center">
        <ViteGreeting />
      </div>
      <CustomButton width="300px" onClick={menuPage1} value="とうげんのメニュー" /><br /><br />
      <CustomButton width="300px" onClick={menuPage2} value="とうげんに問い合わせする" /><br /><br />
      <div className="container mx-auto flex justify-between items-center">
        <ViteFooter />  
      </div>
      <Routes>
         <Route path='/Pages' element={<Menu />} />
      </Routes>
      <div>
        <CopyrightApp />
      </div>
      <div>
        {isDesktopOrLaptop && <p>デスクトップまたはラップトップ</p>}
        {isTabletOrMobile && <p>タブレットまたはモバイル</p>}
      </div>
    </>
  )
}

export default App
