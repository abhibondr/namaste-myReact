import resList from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {Array.isArray(resList) &&
            resList.map((restaurent) => {
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
