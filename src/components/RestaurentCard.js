import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  const { resObj } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    areaName,
    avgRating,
    costForTwo,
    sla,
  } = resObj?.info;
  return (
    <div className="resto-card" style={{ backgroundColor: "lightgrey" }}>
      <img
        className="res-img"
        src={CDN_URL + cloudinaryImageId}
        alt="resto-burger"
      />
      <h4>{name}</h4>
      <p>{cuisines.join(", ")}</p>
      <h5>
        <span>
          {locality}, {areaName}
        </span>
      </h5>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h5>DeliveryTime: {sla?.slaString}</h5>
    </div>
  );
};

export default RestaurentCard;
