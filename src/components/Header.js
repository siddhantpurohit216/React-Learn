import { useContext, useState } from "react";
import { LOGO_URL } from "../utlis/contants";
import { Link } from "react-router-dom";
import useOnline from "../utlis/useOnline";
import userContext from "../utlis/UserContext";
import {useSelector} from "react-redux"

const Header = () => {
  const [btnName, setBtnName] = useState("Logout");

  const {loggedInUser}=useContext(userContext);
  const isOnline = useOnline();


  //subscribe to the store using selector

  const cartItems= useSelector((store)=>store.cart.items)


  return (
    <div className="flex justify-between shadow-lg dark:bg-slate-800	">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex  items-center	">
        <ul className="flex p-4 m-4 ">
          <li  className="px-4 ">{isOnline ? "🟢" : "🔴"}</li>
          <li className="px-4 dark:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 dark:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 dark:text-white">
            <Link to="/contact">Contact Us</Link>
          </li>

{/* {cart} */}
          <li className="px-4 dark:text-white font-bold text-xl ">
            <Link to="/about">Cart({cartItems.length})</Link>
          </li>



          <li className="px-4 dark:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 dark:text-white">
            {loggedInUser}
          </li>
          <button className="px-4 dark:text-white hover:bg-slate-50 hover:text-black "
            onClick={() => {
              if (
                btnName == "Logout" ? setBtnName("Login") : setBtnName("Logout")
              );
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
