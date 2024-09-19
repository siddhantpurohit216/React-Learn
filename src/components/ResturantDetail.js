import { useEffect, useState } from "react";
import Shemmer from "./shemmer";
import { REST_DETAILS_URL } from "../utlis/contants";
import { useParams } from "react-router-dom";

const ResturantDetail = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const comp = REST_DETAILS_URL + id;
  console.log("rendered");

  useEffect(() => {
    fetchRestData();
  }, []);

  async function fetchRestData() {
    try {
      const res = await fetch(comp);
      const jsonData = await res.json();
      console.log(jsonData.data);
      const data = jsonData.data.cards[2].card.card.info;
      // console.log(data);
      const {
        id,
        name,
        city,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        avgRating,
        sla,
      } = data;
      setData(data);
      console.log(
        id,
        name,
        city,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        avgRating
      );
    } catch {
      console.log("Data not found");
    }
  }
  return data.length == 0 ? (
    <Shemmer />
  ) : (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.city}</h1>
      <h1>{data.costForTwoMessage}</h1>
    </div>
  );
};
export default ResturantDetail;
