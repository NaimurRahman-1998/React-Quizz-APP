import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/Mainlayout"
import Home from "../pages/home/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path: '/',
          element: <Home></Home>
        }
      ]
    },
  ]);