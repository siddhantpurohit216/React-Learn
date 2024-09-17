const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  

const ResturantCard = (props) => {
    const { data } = props; 
  const imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" src={imgUrl + data.cloudinaryImageId} alt="Logo" />
        <h3>{data.name}</h3>
        <h4>{data.cuisines.join(", ")}</h4>
        <h4>{data.avgRating} stars</h4>
        <h4>{data.deliveryTime+ " mins"}</h4>
      </div>
    );
  };
  export default ResturantCard;