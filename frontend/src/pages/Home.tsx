import Categories from "@/reuseablecoms/Categories";
import Banner from "../reuseablecoms/Banner";
import Navbar from "@/reuseablecoms/Navbar";
import Products from "@/reuseablecoms/Products";

export default function Home() {
  return (
    <div className="w-screen text-black flex flex-col items-center justify-center  bg-white ">
      <Navbar />
      <Banner img="./homeImgs/slider-women1.jpg" />
      <div className="flex flex-col items-center  justify-center text-black  gap-10 ">
        <Categories />
        <Products />
      </div>
    </div>
  );
}
