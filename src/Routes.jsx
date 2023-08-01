import Signup from "./Pages/Screens/Signup/Signup";
import Login from "./Pages/Screens/Login/Login"
//import Home from "./Home/Home";
// import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { createBrowserRouter } from "react-router-dom";
import Authlayout from "./Layout/Authlayout/Authlayout";
import Mainlayout from "./Layout/MainLayout/Mainlayout";
import Home from "./Pages/Screens/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Authlayout />,
    children: [

      {
        path: "home",
        element: <Home />,
      },

    ],
  },
  {
    path: "/",
    element: <Mainlayout />,
    children: [

     
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },

    ],
  }
]

);
export default router;
