 import React from 'react';
 import {Link} from "react-router-dom"
 import TeslaLogo from "../Images/teslaLogoSmall.svg";
 
 const Header = () => {
     return (
         <div className="header">
             <div className="header_logo">
                 <img src={TeslaLogo} alt="tesla_clone-logo"/>
             </div>
             <div className="header__center">
                 <Link to ="#" className="header__links">Model S</Link>
                 <Link to ="#" className="header__links">Model 3</Link>
                 <Link to ="#" className="header__links">Model X</Link>
                 <Link to ="#" className="header__links">Model Y</Link>
                 <Link to ="#" className="header__links">Solar Roof</Link>
                 <Link to ="#" className="header__links">Solar Panel</Link>
             </div>

            <div className="header__right">
            <p>Shop</p>
            <p>Tesla Account</p>
            </div>
         </div>
     )
 }
 
 export default Header
 