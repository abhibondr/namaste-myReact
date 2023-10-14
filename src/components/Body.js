import { useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState(resList);

  return (
    <>
      <div className="body">
        <div className="filter">
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
          {Array.isArray(restaurentList) &&
            restaurentList.map((restaurent) => {
              return (
                <RestaurentCard key={restaurent.info.id} resObj={restaurent} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Body;
