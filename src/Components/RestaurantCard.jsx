const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVT93q52Nio-a0-QA72x8GC_ID3vyxN7oXg&usqp=CAU"
        />
      </div>
      <h3>name</h3>
      <h3>
        <span>4.4 </span>
        <span>30 mins</span>
      </h3>
      <h3>price</h3>
      <p>cuisines</p>
      <p>area name</p>
    </div>
  );
};

export default RestaurantCard;
