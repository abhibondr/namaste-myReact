import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [restMenu, setRestMenu] = useState([]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4325609&lng=73.83055329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(
        "data:",
        json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
      );

      setRestMenu(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return restMenu === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      {Array.isArray(restMenu) &&
        restMenu.map((restaurants, i) => (
          <div key={i}>Address:{restaurants?.info?.areaName}</div>
        ))}

      <h2>Rest Name </h2>
      <div>
        <h3>Menu</h3>
        <ul>
          <li>Veg Thali</li>
          <li>Pav Bhaji</li>
          <li>Alu muttor</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
