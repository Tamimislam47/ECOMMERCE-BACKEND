import React from "react";
import Categories from "@/reuseablecoms/Categories";
import Banner from "../reuseablecoms/Banner";
import Navbar from "@/reuseablecoms/Navbar";
import Products from "@/reuseablecoms/Products";
import TwoGridProduct from "@/reuseablecoms/TwoGridProduct";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import NewsInsight from "@/reuseablecoms/NewsInsight";
import Footer from "@/reuseablecoms/Footer";
import ShopInstagram from "@/reuseablecoms/ShopInstagram";
import SwiperWrapper from "@/reuseablecoms/SwiperWrapper";
import { Card } from "@/reuseablecoms/Products";
import ShopNav from "@/reuseablecoms/ShopNav";
// import CustomerView from "@/reuseablecoms/CustomerView";
type Props = {};

export default function Shop({}: Props) {
  return (
    <div className="flex w-screen flex-col bg-white">
      <Navbar />
      <CommonSmallBanner />
      <div className="mt-3 grid justify-center gap-3">
        <div className="flex flex-col items-center justify-center p-4">
          <ShopNav />
        </div>
        <Products pagination={true} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
