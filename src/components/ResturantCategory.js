import React, { useState } from "react";
import { useSubmit } from "react-router-dom";

const ResturantCategory = (props) => {
  console.log("_____-----");

  const [showDesp,setShowDesp]=useState(false);
  console.log(props.data);
  const data = props.data;


  const handleClick = () => {
    console.log("CLicked!!");
    setShowDesp(!showDesp);
  };

  return (
    <div className="w-6/12 bg-gray-500 shadow-lg p-4 mx-auto my-2 rounded-lg ">
      {/* {Header} */}
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className=" text-center ">{data.name}</span>
        <span>{data.price ? "Rs: " + data.price / 100 : ""}</span>
        <span className="p-1 bg-white rounded-lg shadow-lg">Add➕</span>


      </div>

      {showDesp && <div>
        <span>{data.description}</span>
      </div>}
      
    </div>
  );
};

export default ResturantCategory;
