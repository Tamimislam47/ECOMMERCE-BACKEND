import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/Home";
import Pages from "@/pages/Pages";
import Products from "@/reuseablecoms/Products";
import BuyTheme from "@/pages/BuyTheme";
import Blog from "@/pages/Blog";
import Login from "@/pages/Login";
import Register from "@/reuseablecoms/Register";
import AllProducts from "@/pages/AllProducts";
import SingleBlog from "@/pages/SingleBlog";
import Wishlist from "@/pages/Wishlist";
import Shop from "@/pages/Shop";
import AboutUs from "@/pages/AboutUs";
import StoreLocationPage from "@/pages/StoreLocationPage";
import Faqs from "@/pages/Faqs";

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
  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/singleblog",
    element: <SingleBlog />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/storelist",
    element: <StoreLocationPage />,
  },

  {
    path: "/feedbacks",
    element: <StoreLocationPage />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/contactus",
    element: <StoreLocationPage />,
  },
  {
    path: "/storelist",
    element: <StoreLocationPage />,
  },
  {
    path: "/storelist",
    element: <StoreLocationPage />,
  },
]);
