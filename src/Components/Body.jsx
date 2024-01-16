import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // const styleCard = {
  //     backgroundColor: '#f0f0f0',
  // }

  return (
    <div className="body">
      <div className="filter">search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
