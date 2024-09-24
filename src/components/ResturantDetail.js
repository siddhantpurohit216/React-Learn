import { useState } from "react";
import { useParams } from "react-router-dom";
import useResturantDetail from "../utlis/useResturantDetail";
import Shemmer from "./shemmer";
import ResturantCategory from "./ResturantCategory";

const ResturantDetail = () => {
  const { id } = useParams();
  const { data, itemNames } = useResturantDetail(id);
  
  const [showIndex, setShowIndex] = useState(0); // Initialize with null so no item is expanded initially

  return !data.id ? (
    <Shemmer />
  ) : (
    <div className="dark:bg-slate-800 h-screen">
      <div className="text-center">
        <h1 className="dark:text-white font-bold py-10 text-2xl">{data.name}</h1>
        <h1 className="dark:text-white font-bold text-2x">{data.cuisines.join(", ")}</h1>
        <h1 className="dark:text-white">{data.costForTwoMessage}</h1>
      </div>

      <h2 className="dark:text-white mt-4 text-center">Recommended Items:</h2>

      {itemNames.map((item, index) => (
        <ResturantCategory
          key={index}
          data={item}
          yourIndex={index}
          showIndex={showIndex} // Only show description if the index matches
          setShowIndex={() => setShowIndex(index)} // Set the clicked index as the current active one
        />
      ))}
    </div>
  );
};

export default ResturantDetail;
