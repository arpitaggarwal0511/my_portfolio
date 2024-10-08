import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomeBody from "./components/HomeBody";
import ContactMe from "./components/ContactMeBody";
import Resume from "./components/ResumeBody";
import Projects from "./components/ProjectsBody";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Layout = () => {
  return(<div classname="app">
    <Header />
    <Outlet />
  </div>);
};


const appRouter = createBrowserRouter([
    {path:"/",
      element:<Layout/>,
      children : [
        {
          path:"/home",
          element:<HomeBody/>
        },
        {
          path:"/contact",
          element:<ContactMe/>
        },
        {
          path:"/resume",
          element:<Resume/>
        },
        {
          path:"/projects",
          element:<Projects/>
        }
      ]
      
    }
  ])
  
  root.render(<RouterProvider router={appRouter} />);