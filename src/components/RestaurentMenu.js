import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4325609&lng=73.83055329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      // const data = await fetch(
      //   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4325609&lng=73.83055329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // ); // cors proxy issue solution (URL)

      const json = await data.json();
      console.log("JSON: ", json);
      setResInfo(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const { name } =
  //   resInfo?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //     ?.info;

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h2>Rest Name </h2>
      <div>
        <h3>Menu</h3>
        <ul>
          <li>{name}</li>
          <li>Pav Bhaji</li>
          <li>Alu muttor</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
