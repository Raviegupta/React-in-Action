import RestaurantCard from "./RestaurantCard";
import resList from "../utils/MockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer"

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetching the live api...");

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(
      "live api data is fetched, converted into json & now printing the json data .."
    );

    // console.log(json);
    liveResList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log(liveResList);
    setListOfRestaurant(liveResList);
    setFilteredRestaurant(liveResList);
  };

  // const styleCard = {
  //     backgroundColor: '#f0f0f0',
  // }

  if(listOfRestaurant.length == 0) return <Shimmer />
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name=""
            id=""
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurant.filter((restau) =>
                restau.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restau) => restau.info.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="top-rated-res-filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.map((restau) => restau);
            setFilteredRestaurant(filteredList);
          }}
        >
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restau) => (
          <Link key={restau.info.id} to={"/restaurants/" + restau.info.id}><RestaurantCard resData={restau} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
