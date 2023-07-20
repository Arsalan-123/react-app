import Signup from "./Pages/Screens/Signup/Signup";
import Login from "./Pages/Screens/Login/Login"
import Home from "./Home/Home";
// import { Routes as ReactRoutes, Route } from 'react-router-dom';
import {createBrowserRouter} from "react-router-dom";
  


createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    },
  ]);
  


export default createBrowserRouter;
