import React from "react";
import ReactDOM from "react-dom/client";

//we can call a react elem inside a another react elem using {obj_name}
//can call a fcunctional compo inside antoher fun compo using {func_compo_name()} or <func_compo_name/>
//can call another func compo from one func comp
//all possible combi is possible
const restaurantData = [
  {
    id: 1,
    name: "Spicy Delights",
    cuisines: ["Biriyani", "Indian"],
    ratings: {
      average: 4.4,
      totalReviews: 120,
    },
    deliveryTime: 38,
    images: {
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
  },
  {
    id: 2,
    name: "Sushi Express",
    cuisines: ["Japanese", "Sushi"],
    ratings: {
      average: 4.7,
      totalReviews: 85,
    },
    deliveryTime: 25,
    images: {
      logo: "https://images.unsplash.com/photo-1541698439135-579dc7d62207",
    },
  },
  {
    id: 3,
    name: "Pasta Fiesta",
    cuisines: ["Italian", "Pasta"],
    ratings: {
      average: 4.2,
      totalReviews: 100,
    },
    deliveryTime: 30,
    images: {
      logo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
  },
  {
    id: 4,
    name: "Burger Town",
    cuisines: ["American", "Burgers"],
    ratings: {
      average: 4.5,
      totalReviews: 150,
    },
    deliveryTime: 20,
    images: {
      logo: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    },
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisines: ["Mexican", "Tacos"],
    ratings: {
      average: 4.3,
      totalReviews: 110,
    },
    deliveryTime: 22,
    images: {
      logo: "https://images.unsplash.com/photo-1603039617416-82d401f8094e",
    },
  },
  {
    id: 6,
    name: "Vegan Garden",
    cuisines: ["Vegan", "Healthy"],
    ratings: {
      average: 4.6,
      totalReviews: 95,
    },
    deliveryTime: 28,
    images: {
      logo: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9",
    },
  },
  {
    id: 7,
    name: "Dim Sum House",
    cuisines: ["Chinese", "Dim Sum"],
    ratings: {
      average: 4.5,
      totalReviews: 130,
    },
    deliveryTime: 35,
    images: {
      logo: "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    },
  },
  {
    id: 8,
    name: "Mediterranean Bites",
    cuisines: ["Mediterranean", "Salads"],
    ratings: {
      average: 4.8,
      totalReviews: 80,
    },
    deliveryTime: 32,
    images: {
      logo: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
    },
  },
  {
    id: 9,
    name: "Pizza Paradise",
    cuisines: ["Italian", "Pizza"],
    ratings: {
      average: 4.7,
      totalReviews: 170,
    },
    deliveryTime: 27,
    images: {
      logo: "https://images.unsplash.com/photo-1548365328-1b41900e4a3f",
    },
  },
  {
    id: 10,
    name: "Indian Spice",
    cuisines: ["Indian", "Curry"],
    ratings: {
      average: 4.3,
      totalReviews: 140,
    },
    deliveryTime: 40,
    images: {
      logo: "https://images.unsplash.com/photo-1592229506306-67b5b3628e3d",
    },
  },
  {
    id: 11,
    name: "Seafood Shack",
    cuisines: ["Seafood", "Grill"],
    ratings: {
      average: 4.4,
      totalReviews: 105,
    },
    deliveryTime: 34,
    images: {
      logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  },
  {
    id: 12,
    name: "Cafe Delight",
    cuisines: ["Cafe", "Desserts"],
    ratings: {
      average: 4.6,
      totalReviews: 90,
    },
    deliveryTime: 15,
    images: {
      logo: "https://images.unsplash.com/photo-1587344533524-10b297ccfbd7",
    },
  },
  {
    id: 13,
    name: "Steak House",
    cuisines: ["American", "Steak"],
    ratings: {
      average: 4.7,
      totalReviews: 130,
    },
    deliveryTime: 42,
    images: {
      logo: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    },
  },
  {
    id: 14,
    name: "Noodle Hut",
    cuisines: ["Chinese", "Noodles"],
    ratings: {
      average: 4.2,
      totalReviews: 145,
    },
    deliveryTime: 30,
    images: {
      logo: "https://images.unsplash.com/photo-1543352634-b9d0c1ff05b1",
    },
  },
  {
    id: 15,
    name: "BBQ Haven",
    cuisines: ["BBQ", "Grill"],
    ratings: {
      average: 4.5,
      totalReviews: 125,
    },
    deliveryTime: 36,
    images: {
      logo: "https://images.unsplash.com/photo-1578689154202-7cbb49a56649",
    },
  },
  {
    id: 16,
    name: "Smoothie Corner",
    cuisines: ["Smoothies", "Healthy"],
    ratings: {
      average: 4.8,
      totalReviews: 75,
    },
    deliveryTime: 18,
    images: {
      logo: "https://images.unsplash.com/photo-1572553755527-1705d21d9b18",
    },
  },
  {
    id: 17,
    name: "Dessert Delights",
    cuisines: ["Desserts", "Cafe"],
    ratings: {
      average: 4.7,
      totalReviews: 110,
    },
    deliveryTime: 22,
    images: {
      logo: "https://images.unsplash.com/photo-1581369363737-879f4e3c27f4",
    },
  },
  {
    id: 18,
    name: "Tandoori Hub",
    cuisines: ["Indian", "Tandoori"],
    ratings: {
      average: 4.6,
      totalReviews: 140,
    },
    deliveryTime: 39,
    images: {
      logo: "https://images.unsplash.com/photo-1606412182887-b5faba62bcd3",
    },
  },
  {
    id: 19,
    name: "Greek Eats",
    cuisines: ["Greek", "Mediterranean"],
    ratings: {
      average: 4.5,
      totalReviews: 100,
    },
    deliveryTime: 33,
    images: {
      logo: "https://images.unsplash.com/photo-1604909053191-f6e99534a9da",
    },
  },
  {
    id: 20,
    name: "Vegan Bistro",
    cuisines: ["Vegan", "Vegetarian"],
    ratings: {
      average: 4.4,
      totalReviews: 115,
    },
    deliveryTime: 29,
    images: {
      logo: "https://images.unsplash.com/photo-1542315192-c4e1d4619380",
    },
  },
];



const styleCard = {
  backgroundColor: "#f0f0f0",
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { data } = props; // Destructuring data from props
  const {images,name,cuisines,ratings,deliveryTime}=data;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={images.logo}
        alt="Logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{ratings.average} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantData.map((restaurant) => (
          <ResturantCard key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
