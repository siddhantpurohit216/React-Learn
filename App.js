import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body"
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const approutes= createBrowserRouter([
  {
    path:"/",
    element : <App/>
  },
  {
    path:"/About",
    element : <About/>
  },
  {
    path:"/Contact",
    element : <Contact/>
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={approutes}/>)
