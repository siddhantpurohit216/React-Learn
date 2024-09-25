import React from "react";
import {  addItem} from "../utlis/cartSlice";
import {useDispatch} from "react-redux"


const ResturantCategory = ({ data, yourIndex, showIndex, setShowIndex }) => {
  // console.log(showIndex)
  const handleClick = () => {
    setShowIndex();
  };

  const dispatch=useDispatch();
  
  const handleAddItem=(item)=>{
    dispatch(addItem(item));
    console.log(item)
  }
  return (
    <div className="w-6/12 bg-gray-500 shadow-lg p-4 mx-auto my-2 rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-center">{data.name}</span>
        <span>{data.price ? "Rs: " + data.price / 100 : ""}</span>
        <button className="p-1 bg-white rounded-lg shadow-lg"
        onClick={()=>handleAddItem(data)}
        >Add➕</button>
      </div>

      {/* Description (only visible when this item is expanded) */}
      {showIndex == yourIndex && (
        <div className="mt-2">
          <span>{data.description}</span>
        </div>
      )}
    </div>
  );
};

export default ResturantCategory;
