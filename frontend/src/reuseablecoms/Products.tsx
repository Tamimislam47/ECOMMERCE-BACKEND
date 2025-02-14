import { Pagination } from "@mui/material";
import { Button } from "../components/ui/button.tsx";
import { Link } from "react-router-dom";

type Props = {
  pagination?: boolean;
};

export const Card: React.FC<Props> = () => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="relative flex h-[80%] w-full flex-col items-center rounded-xl bg-cover bg-center">
        <img
          src="./homeImgs/women-9.jpg"
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
        <Button className="absolute bottom-5 w-[95%] rounded-full bg-white font-bold text-black hover:bg-black hover:text-white">
          Add To Cart
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3>Reamie shirt with pockets</h3>
        <p className="font-semibold">$100</p>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:border-2">
            <p className="h-1/2 w-1/2 rounded-full"></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Products({ pagination }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-rows-1 sm:w-full sm:grid-rows-2 md:grid-cols-2 lg:min-h-[120vh] lg:w-[80%] lg:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {pagination ? (
          <div className="mb-4" >
            <Pagination />
          </div>
        ) : (
          <Link to={"/allproducts"} className="underline hover:text-red-400">
            View All Products
          </Link>
        )}
      </div>
    </>
  );
}
