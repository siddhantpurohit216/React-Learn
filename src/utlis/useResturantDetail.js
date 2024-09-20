import {useEffect, useState} from "react"
import { REST_DETAILS_URL } from "../utlis/contants";

const useResturantDetail=  (id)=>{
    const [data, setData] = useState([]);

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
    return data;
}


export default useResturantDetail;