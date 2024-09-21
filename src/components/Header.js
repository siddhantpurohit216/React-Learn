import { useState } from "react";
import { LOGO_URL } from "../utlis/contants";
import {Link} from "react-router-dom"
import useOnline from "../utlis/useOnline";


const Header = () => {

    const [btnName,setBtnName]=useState("Logout");

    const isOnline=useOnline();
    
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
          <li>{isOnline ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <button onClick={()=>{
                if(btnName=="Logout" ? setBtnName("Login"): setBtnName("Logout") );
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;