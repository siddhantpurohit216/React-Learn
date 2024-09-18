import { useState } from "react";
import { LOGO_URL } from "../utlis/contants";

const Header = () => {

    const [btnName,setBtnName]=useState("Logout");

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
                if(btnName=="Logout" ? setBtnName("Login"): setBtnName("Logout") );
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;