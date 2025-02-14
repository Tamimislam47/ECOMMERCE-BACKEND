import { Button } from "@mui/material";
import { TbFilterSearch } from "react-icons/tb";
import { BsGrid3X2Gap } from "react-icons/bs";

type Props = {};

const ShopNav = (props: Props) => {
  return (
    <div className="grid h-8 w-full grid-cols-3 justify-center lg:w-[80%]">
      <div>
        <Button
          sx={{
            color: "black",
            display: "flex",
            gap: "6px",
            fontSize: "12px",
          }}
        >
          <TbFilterSearch />
          Filters
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <i className="hover:cursor-pointer">
          <BsGrid3X2Gap fill="black" />
        </i>
      </div>

      <div className="flex justify-end">
        <select className="w-1/2 border-[1px] border-gray-500 bg-transparent text-sm hover:cursor-pointer">
          <option disabled selected>
            Sort by (Default)
          </option>
          <option>Title Ascending </option>
          <option>Title Descending</option>
          <option>Price Ascending</option>
          <option>Price Descending</option>
        </select>
      </div>
    </div>
  );
};

export default ShopNav;
