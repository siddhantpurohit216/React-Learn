import React from "react";

const ResturantCategory = ({ data, yourIndex, showIndex, setShowIndex }) => {
  // console.log(showIndex)
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-500 shadow-lg p-4 mx-auto my-2 rounded-lg">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-center">{data.name}</span>
        <span>{data.price ? "Rs: " + data.price / 100 : ""}</span>
        <span className="p-1 bg-white rounded-lg shadow-lg">Add➕</span>
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
