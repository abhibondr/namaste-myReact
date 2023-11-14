import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4325609&lng=73.83055329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      setRestaurentList(
        //optional chaining
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      setFilteredRes(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log("error occured:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return restaurentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="searchText">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const searchRes = restaurentList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRes(searchRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterResList = restaurentList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurentList(filterResList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {Array.isArray(filteredRes) &&
          filteredRes.map((restaurent) => {
            return (
              <RestaurentCard key={restaurent.info.id} resObj={restaurent} />
            );
          })}
      </div>
    </div>
  );
};

export default Body;
