import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import Footer from "@/reuseablecoms/Footer";
import Navbar from "@/reuseablecoms/Navbar";
import React from "react";

type Props = {};

const SingleBlog = (props: Props) => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <CommonSmallBanner />
      <Footer />
    </div>
  );
};

export default SingleBlog;
