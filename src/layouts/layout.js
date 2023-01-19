import React from "react";
import Footer from "./footer/index";
import { BrowserRouter } from "react-router-dom";



function Layout() {

  return (
    <BrowserRouter forceRefresh={true}>
   <a href='www.google.com'>
      HELLLOOLLLLLLLLLL
     </a>
     <Footer/>
       </BrowserRouter>
  );
}

export default Layout;