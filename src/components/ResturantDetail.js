import Shemmer from "./shemmer";
import { useParams } from "react-router-dom";
import useResturantDetail from "../utlis/useResturantDetail"

const ResturantDetail = () => {

  const { id } = useParams();


  const data=useResturantDetail(id);
  
  return data.length == 0 ? (
    <Shemmer />
  ) : (
    <div>
      <h1 className="dark:text-white">{data.id}</h1>
      <h1 className="dark:text-white">{data.name}</h1>
      <h1 className="dark:text-white">{data.city}</h1>
      <h1 className="dark:text-white">{data.costForTwoMessage}</h1>
    </div>
  );
};
export default ResturantDetail;
