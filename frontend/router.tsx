import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Shop from "@/pages/Shop";
import Pages from "@/pages/Pages";
import Products from "@/reuseablecoms/Products";
import BuyTheme from "@/pages/BuyTheme";
import Blog from "@/pages/Blog";
import { LogIn } from "lucide-react";
import Login from "@/pages/Login";
import Register from "@/reuseablecoms/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/buytheme",
    element: <BuyTheme />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
