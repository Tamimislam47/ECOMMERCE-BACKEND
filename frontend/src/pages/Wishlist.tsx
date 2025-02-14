import Navbar from "@/reuseablecoms/Navbar";
import React from "react";
import img from "/homeImgs/loginImg1.jpg";
import Footer from "@/reuseablecoms/Footer";
import DataTable from "@/reuseablecoms/DataTable";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
type Props = {};

const Wishlist = (props: Props) => {
  return (
    <div className="bg-white">
      <Navbar />
      <CommonSmallBanner />
      <DataTable />
      <Footer />
    </div>
  );
};

export default Wishlist;
