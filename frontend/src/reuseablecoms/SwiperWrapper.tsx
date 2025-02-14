import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { PiSealCheck } from "react-icons/pi";

type IconsType = {
  id: number;
  IconComponent: JSX.Element;
  title: string;
  description: string;
};

const icons: IconsType[] = [
  {
    id: 1,
    IconComponent: <FaShippingFast />,
    title: "Free Shipping",
    description: "Get free shipping on all orders over $50",
  },
  {
    id: 2,
    IconComponent: <GiReturnArrow />,
    title: "14-Day Returns",
    description: "Return or exchange your order within 14 days",
  },
  {
    id: 3,
    IconComponent: <FaHeadphonesSimple />,
    title: "24/7 Support",
    description: "Get help whenever you need it",
  },
  {
    id: 4,
    IconComponent: <PiSealCheck />,
    title: "Member Dicounts",
    description: "Get exclusive discounts and rewards",
  },
];

type Props = {};

const SwiperWrapper = (props: Props) => {
  return (
    <div className="grid w-full grid-cols-4 lg:w-[80%]">
      {icons.map((icon) => (
        <div
          className="flex flex-col items-center justify-center gap-3 p-3"
          key={icon.id}
        >
          <i className="text-2xl"> {icon.IconComponent} </i>
          <h1 className="text-lg font-bold">{icon.title} </h1>
          <p className="text-center text-[14px]">{icon.description} </p>
        </div>
      ))}
    </div>
  );
};

export default SwiperWrapper;
