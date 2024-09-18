import { useState } from "react";
import { LOGO_URL } from "../utlis/contants";
import {Link} from "react-router-dom"

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
            <li>
              <Link to="/">Home</Link>
              </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <button onClick={()=>{
                if(btnName=="Logout" ? setBtnName("Login"): setBtnName("Logout") );
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;