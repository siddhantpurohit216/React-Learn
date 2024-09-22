

const ResturantCard = (props) => {
  const { data } = props;
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className=" m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300" >
      <img
        className="res-logo"
        src={imgUrl + data.cloudinaryImageId}
        alt="Logo"
      />
      <h3 className="font-bold py-2 text-lg">{data.name}</h3>
      <h4>{data.cuisines.join(", ")}</h4>
      <h4>{data.avgRating} stars</h4>
      <h4>{data.deliveryTime + " mins"}</h4>
    </div>
  );
};
export default ResturantCard;
