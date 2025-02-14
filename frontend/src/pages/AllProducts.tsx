import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import Footer from "@/reuseablecoms/Footer";
import Navbar from "@/reuseablecoms/Navbar";
import ProductsList from "@/reuseablecoms/ProductsList";
import React from "react";

type Props = {};

export default function AllProducts({}: Props) {
  return (
    <div className="min-h-screen w-screen bg-white">
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center gap-16 p-4"></div>
      <CommonSmallBanner />
      <ProductsList />
      <div className="flex mt-10  flex-col items-center justify-center">
        <Footer />
      </div>
    </div>
  );
}
