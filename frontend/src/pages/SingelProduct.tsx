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
import ItemDetails from "@/reuseablecoms/ItemDetails";

type Props = {};

const SingelProduct = (props: Props) => {
  return (
    <div className="w-full bg-white  ">
      <Navbar />
      <div className="flex w-full flex-col items-center justify-center gap-16 p-4">
        <ItemDetails />
        <Footer />
      </div>
    </div>
  );
};

export default SingelProduct;
