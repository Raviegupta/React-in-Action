import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {

  const { name, avgRating, sla, costForTwo, cuisines, locality, cloudinaryImageId } = props.resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src={ CDN_URL + cloudinaryImageId }
        />
      </div>
      <h3>{name}</h3>
      <h3>
        <span>{avgRating} </span>
        <span>{sla.slaString}</span>
      </h3>
      <h3>{costForTwo}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>{locality}</p>
    </div>
  );
};

export default RestaurantCard;
