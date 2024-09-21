import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import ResturantDetail from "./src/components/ResturantDetail";

const Grocery = lazy(() => import("./src/components/Grocery"));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
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
// root.render(<App />);
root.render(<RouterProvider router={approutes} />);
