import { useEffect, useState } from "react";
import { REST_DETAILS_URL } from "../utlis/contants";

const useResturantDetail = (id) => {
  const [data, setData] = useState([]);
  const [itemNames, setItemNames] = useState([]);


  const comp = REST_DETAILS_URL + id;

  console.log("Hook rendered");

  useEffect(() => {
    fetchRestData();
  }, []);

  async function fetchRestData() {
    try {
      const res = await fetch(comp);
      const jsonData = await res.json();

      // console.log(jsonData.data);
      
      const data = jsonData.data.cards[2].card.card.info;
      const reco =jsonData.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards;

      const recommendedCategory = reco.find(
        (c) => c.card?.card?.title === "Recommended"
      );

      let itemNamesList = [];

      if (recommendedCategory) {
        const itemNamesList = recommendedCategory.card.card.itemCards.map(
          (item) => item.card.info
          
        );
        setItemNames(itemNamesList);
        console.log(itemNamesList); 
      } else {
        console.log("No 'Recommended' category found.");
      }

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
       // Set the item names

    } catch {
      console.log("Data not found");
    }
  }
  return { data, itemNames };
};

export default useResturantDetail;
