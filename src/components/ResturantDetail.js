import { useParams } from "react-router-dom";
import useResturantDetail from "../utlis/useResturantDetail";
import Shemmer from "./shemmer";
import ResturantCategory from "./ResturantCategory";

const ResturantDetail = () => {
  const { id } = useParams();

  const { data, itemNames } = useResturantDetail(id);
  console.log(itemNames);

  console.log("________");
  return !data.id ? (
    <Shemmer />
  ) : (
    <div className="dark:bg-slate-800 h-screen  ">
      <div className="text-center">
        <h1 className="dark:text-white font-bold py-10 text-2xl">
          {data.name}
        </h1>
        <h1 className="dark:text-white font-bold  text-2x">
          {" "}
          {data.cuisines.join(", ")}
        </h1>
        <h1 className="dark:text-white">{data.costForTwoMessage}</h1>
      </div>

      <h2 className="dark:text-white mt-4  text-center">Recommended Items:</h2>

      {/* <ul className="dark:text-white">
        {itemNames.map((item, index) => (
          <li key={index}>{item.name}</li> 
        ))}
      </ul> */}
      {itemNames.map((item) => (
        <ResturantCategory key={item.id} data={item} /> // Ensure each component has a unique key
      ))}
    </div>
  );
};
export default ResturantDetail;
