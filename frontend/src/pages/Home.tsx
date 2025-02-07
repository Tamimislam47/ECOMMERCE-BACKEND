import Categories from "@/reuseablecoms/Categories";
import Banner from "../reuseablecoms/Banner";
import Navbar from "@/reuseablecoms/Navbar";
import Products from "@/reuseablecoms/Products";

export default function Home() {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-white text-black">
      <Navbar />
      <Banner img="./homeImgs/slider-women1.jpg" />
      <div className="flex w-full flex-col mt-5  items-center justify-center bg-green-300">
        <Categories />
      <Products />
      </div>
    </div>
  );
}
