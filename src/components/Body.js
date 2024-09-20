import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shemmer from "./shemmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestList, setFilterdRestList] = useState([]);
  // const location = useLocation();

  console.log("Rendedering BODY compo");

  useEffect(() => {
    const data = fetchData();
  }, []);


  async function fetchData() {
    const res = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=23.02760&lng=72.58710"
      
    );
    console.log("making API calls to fecth restDATA!")
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
    }

  if (restList.length === 0) return <Shemmer />;
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
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
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
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
