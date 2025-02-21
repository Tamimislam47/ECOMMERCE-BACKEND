import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import TooltipDemo from "./TooltipDemo";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";
import IconAndText from "./IconAndText";
import { GoStopwatch } from "react-icons/go";
import { GiReturnArrow } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";

type LeftSideItemDetailsProps = {
  img: string;
};

const itemDetailsObj = [
  {
    text: "Delivery & Return",
    icon: FaTruck,
  },
  {
    text: "Ask A Question",
    icon: FaRegCircleQuestion,
  },
  {
    text: "Share",
    icon: FaShareSquare,
  },
  {
    text: "Estimated Delivery:  12-26 days(International), 3-6 days (United States)",
    icon: GoStopwatch,
    direct: "col",
  },
  {
    direct: "col",
    text: "Return within 45 days of purchase. Duties & taxes are non-refundable.",
    icon: GiReturnArrow,
  },
  {
    direct: "col",
    text: "View Store Information",
    icon: CiLocationOn,
  },
];

const LeftSideItemDetails: React.FC<LeftSideItemDetailsProps> = ({ img }) => {
  return (
    <div className="flex w-full flex-col-reverse items-start justify-start lg:flex-row">
      {/* Thumbnails Section */}
      <div className="flex gap-5 lg:w-[15%] lg:flex-col">
        <div className="innerDiv flex flex-1 items-center justify-center p-2 pt-0">
          <img
            src="https://modavereact.vercel.app/images/products/womens/women-5.jpg"
            alt="Thumbnail 1"
            className="cursor-pointer"
          />
        </div>
        <div className="innerDiv flex flex-1 items-center justify-center p-2">
          <img
            src="https://modavereact.vercel.app/images/products/womens/women-5.jpg"
            alt="Thumbnail 2"
            className="cursor-pointer"
          />
        </div>
        <div className="innerDiv flex flex-1 items-center justify-center p-2">
          <img
            src="https://modavereact.vercel.app/images/products/womens/women-5.jpg"
            alt="Thumbnail 3"
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Main Image with Magnification */}
      <div className="w-full lg:w-[85%]">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

const RightSideItemsDetials: React.FC = () => {
  return (
    <div>
      <div className="flex gap-4">
        {itemDetailsObj
          .filter((item) => item.direct !== "col")
          .map((itemDetails, key) => (
            <div className="flex" key={key}>
              <IconAndText
                text={itemDetails.text}
                icon={itemDetails.icon}
                className="text-[14px]"
              />
            </div>
          ))}
      </div>

      <div>
        {itemDetailsObj
          .filter((item) => item.direct === "col")
          .map((itemDetails, key) => (
            <div className="flex" key={key}>
              <IconAndText
                text={itemDetails.text}
                icon={itemDetails.icon}
                className="text-[13px]"
              />
            </div>
          ))}
      </div>
      <hr className="border-[1px] border-gray-500" />

      <div className="flex flex-col">
        <span>SKU: 53453412</span>
        <span>Vendor: Modave</span>
        <span>Available: Instock</span>
        <span>Categories: Clothes,women,T-shirt</span>
      </div>

      <hr className="border-[1px] border-gray-500" />

      <div className="paymentCards flex h-[40px]  items-center ">
        <h1 className="font-bold text-[15px]">Guranteed safe checkout:</h1>
        <div className="flex gap-4 h-full">
          <img
            src="https://modavereact.vercel.app/images/payment/img-2.png"
            alt=""
          />
          <img
            src="https://modavereact.vercel.app/images/payment/img-5.png"
            alt=""
          />
          <img
            src="https://modavereact.vercel.app/images/payment/img-1.png"
            alt=""
          />
          <img
            src="https://modavereact.vercel.app/images/payment/img-3.png"
            alt=""
          />
          <img
            src="https://modavereact.vercel.app/images/payment/img-6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const RightSideItemDetails = () => {
  const arr = ["S", "M", "L", "XL", "XXL"];

  const [size, setSize] = useState<string>("S");
  const [count, setcount] = useState<number>(1);

  return (
    <div className="flex flex-col gap-5 p-4">
      <h1 className="text-4xl font-extrabold">V-neck cotton T-shirt</h1>
      <div className="flex w-[70%] justify-between">
        <span>134 reviews</span>
        <span>18 sold in last 32 hours</span>
      </div>
      <span className="text-2xl font-bold">$59.99</span>
      <p>
        The garments labelled as Committed are products that have been produced
        using sustainable fibres or processes, reducing their environmental
        impact.
      </p>
      <p className="flex items-center gap-1">
        <FaEye />
        28 people are viewing this right now
      </p>
      <span>Selected Size : {size} </span>
      <div className="flex gap-5">
        {arr.map((btnsize, key) => (
          <Button
            onFocus={(e) => setSize(e.target.value)}
            key={key}
            value={btnsize}
            className={`"bg-white h-[50px] w-[50px] rounded-full border-2 border-gray-500 font-bold text-black focus:border-0 focus:bg-black focus:text-white`}
          >
            {btnsize}
          </Button>
        ))}
      </div>
      {/* //TODO Quantity */}
      <div className="flex max-w-[100px] flex-col gap-4">
        <span>Quantity:</span>
        <div className="flex items-center justify-center rounded-xl border-2">
          <Button
            className="text-xl font-bold"
            onClick={() => setcount((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            -
          </Button>
          <span> {count} </span>
          <Button
            className="text-xl font-bold"
            onClick={() => setcount((prev) => (prev = prev + 1))}
          >
            +
          </Button>
        </div>
      </div>

      {/* //TODO buttons */}
      <div className="btns">
        <div className="upper flex items-center justify-between gap-4 pb-3 pt-3">
          <Button className="h-[50px] w-[70%] rounded-3xl bg-black font-bold text-white hover:bg-[#E43131]">
            ALREADY ADDED $554.23
          </Button>

          <div className="flex w-[30%] gap-y-32">
            <TooltipDemo icon={<FaRotate />} text={"Already Compared"} />
            <TooltipDemo icon={<FaRegHeart />} text={"Already Wishlist"} />
          </div>
        </div>

        <Button className="h-[50px] w-full rounded-3xl bg-[#E43131] font-bold text-white hover:bg-black">
          BUY IT NOW
        </Button>
      </div>
    </div>
  );
};

const ItemDetails = () => {
  const imageUrl =
    "https://modavereact.vercel.app/images/products/womens/women-5.jpg";

  return (
    <div className="grid w-full grid-cols-2 lg:w-[80%]">
      <LeftSideItemDetails img={imageUrl} />
      <div>
        <RightSideItemDetails />
        <RightSideItemsDetials />
      </div>
    </div>
  );
};

export default ItemDetails;
