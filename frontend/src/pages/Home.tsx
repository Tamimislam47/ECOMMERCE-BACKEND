import Categories from "@/reuseablecoms/Categories";
import Banner from "../reuseablecoms/Banner";
import Navbar from "@/reuseablecoms/Navbar";
import Products from "@/reuseablecoms/Products";
import TwoGridProduct from "@/reuseablecoms/TwoGridProduct";
import SmallBanner from "@/reuseablecoms/SmallBanner";
import NewsInsight from "@/reuseablecoms/NewsInsight";
import Footer from "@/reuseablecoms/Footer";
import ShopInstagram from "@/reuseablecoms/ShopInstagram";
import SwiperWrapper from "@/reuseablecoms/SwiperWrapper";
// import CustomerView from "@/reuseablecoms/CustomerView";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <Banner img="./homeImgs/slider-women1.jpg" />
      <div className="flex w-full flex-col items-center justify-center gap-5 p-4">
        <Categories />
        <Products />
        <TwoGridProduct />
        <div className="mt-12 flex w-screen flex-col items-center justify-center bg-[#F7F7F7]">
          <SmallBanner targetDate={"2025-02-20T00:00:00"} />
        </div>
        {/* <CustomerView /> */}
        <NewsInsight />
        <ShopInstagram />
        <SwiperWrapper />
        <Footer />
      </div>
    </div>
  );
}
