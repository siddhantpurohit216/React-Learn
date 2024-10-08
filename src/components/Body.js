import ResturantCard from "./ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shemmer from "./shemmer";
import { Link } from "react-router-dom";
import userContext from "../utlis/UserContext";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestList, setFilterdRestList] = useState([]);

  console.log("Rendedering BODY compo");

  const { loggedInUser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=23.02760&lng=72.58710"
      // "https://www.swiggy.com/mapi/homepage/getCards?lat=21.99740&lng=79.00110"
      
    );

    console.log("making API calls to fecth restDATA!");
    if (res.ok) {
      try {
        const d = await res.json();
        // console.log(d);
        const restaurants =
          d.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants.map(
            (restaurant) => {
              const info = restaurant.info;
              return {
                id: info.id,
                name: info.name,
                avgRating: info.avgRating,
                cuisines: info.cuisines,
                cloudinaryImageId: info.cloudinaryImageId,
                deliveryTime: info.sla.deliveryTime,
              };
            }
          );
        setRestList(restaurants);
        setFilterdRestList(restaurants);
        console.log(restaurants);
        return restaurants;
      } catch (e) {
        console.error("Error parsing JSON: ", e);
      }
    } else {
      console.error(`Error: ${res.status} - ${res.statusText}`);
    }
  }

  if (restList.length === 0) return <Shemmer />;
  return (
    <div className="dark:bg-slate-800">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100  m-4 rounded-lg"
            onClick={() => {
              const searchFilterdList = restList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(searchFilterdList);
              setFilterdRestList(searchFilterdList);
            }}
          >
            Search
          </button>
          {/* {change here} */}
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div className="m-4 p-4 flex items-justify-evenly">
          <button
            className="px-4 py-2 bg-gray-100  m-4 rounded-lg"
            onClick={() => {
              let updatedList = filterdRestList.filter(
                (rest) => rest.avgRating > 4.5
              );
              console.log(updatedList);
              setFilterdRestList(updatedList);
            }}
          >
            Top rated rest
          </button>
        </div>
      </div>
      <div className="flex flex-wrap h-max gap-6 justify-evenly">
        {filterdRestList.map((restaurant) => (
          <Link to={"/resturant/" + restaurant.id} key={restaurant.id}>
            <ResturantCard data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
