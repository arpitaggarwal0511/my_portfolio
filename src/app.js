import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResumeContact from "./components/ContactMeBody";
import About from "./components/About";
import Projects from "./components/ProjectsBody";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Layout = () => {
  return(<div className="app">
    <Header />
    <Outlet />
  </div>);
};


const appRouter = createBrowserRouter([
    {path:"/",
      element:<Layout/>,
      children : [
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/resumecontact",
          element:<ResumeContact/>
        },
        {
          path:"/",
          element:<Projects/>
        }
      ]
      
    }
  ])
  
  root.render(<RouterProvider router={appRouter} />);