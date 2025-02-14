import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Nav: React.FC = () => {
  return (
    <div className="h-[51px] w-full">
      <Button className="bg-red-400">Filters</Button>
    </div>
  );
};

const ProductsList = (props: Props) => {
  return (
    <div className="grid grid-rows-2 lg:w-[80%] h-3">
      <Nav />
    </div>
  );
};

export default ProductsList;
