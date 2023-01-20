import React from "react";
import Footer from "./footer/index";
import facebookimg from '../images/facebook.png';
import { BrowserRouter } from "react-router-dom";
import Header from "./header/header";


function Layout() {

  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
   <a href='www.google.com'>
      HELLLOOLLLLLLLLLL
     </a>
     <Footer/>
       </BrowserRouter>
  );
}

export default Layout;