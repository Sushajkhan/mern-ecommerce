import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/Home/SingleProduct";
import Login from "../pages/Login";
import Cart from "../components/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element:<Home/>
        }, 
        {
          path: "/shop/:id",
          element:<SingleProduct/>
        }
      ]
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path: "/cart",
      element:<Cart/>
    }
  ]);
  

export default router