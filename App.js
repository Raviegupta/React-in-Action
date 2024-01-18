import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/Pages/About";
import Contact from "./src/Pages/Contact";
import Error from "./src/Pages/Error";
import RestaurantMenu from "./src/Pages/RestaurantMenu";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    "path": "/",
    "element": <AppLayout />,
    "children": [
      {
        "path": "/",
        "element": <Body />
      },
      {
        "path": "/about",
        "element": <About />
      },
      {
        "path": "/contact",
        "element": <Contact />
      },
      {
        "path": "/restaurants/:resId",
        "element": <RestaurantMenu />
      }
    ],
    "errorElement": <Error />
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
root.render(<RouterProvider router={appRouter}/>);
