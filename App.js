import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/Pages/About";
import Contact from "./src/Pages/Contact";
import Error from "./src/Pages/Error";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    "path": "/",
    "element": <AppLayout />,
    "errorElement": <Error />
  },
  {
    "path": "/about",
    "element": <About />
  },
  {
    "path": "/contact",
    "element": <Contact />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
root.render(<RouterProvider router={appRouter}/>);
