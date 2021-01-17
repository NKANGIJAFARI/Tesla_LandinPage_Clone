 import React from 'react';
 import '../components/Header.css';
 import TeslaLogo from "../Images/teslaLogoSmall.svg";
 
 const Header = () => {
     return (
         <div className="header">
             <div className="header_logo">
                 <img src={TeslaLogo} alt="tesla_clone-logo"/>
             </div>
             <div className="header__center">
                 <p>Model S</p>
                 <p>Model 3</p>
                 <p>Model X</p>
                 <p>Model Y</p>
                 <p>Solar Roof</p>
                 <p>Solar Panel</p>
             </div>

            <div className="header__right">
            <p>Shop</p>
            <p>Tesla Account</p>
            </div>
         </div>
     )
 }
 
 export default Header
 