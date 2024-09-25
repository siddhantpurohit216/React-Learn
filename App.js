import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import ResturantDetail from "./src/components/ResturantDetail";
import userContext from "./src/utlis/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utlis/appStore";

const Grocery = lazy(() => import("./src/components/Grocery"));


const App = () => {
  const [userName,setUserName]=useState("user");

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
};

const approutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetail />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approutes} />);
