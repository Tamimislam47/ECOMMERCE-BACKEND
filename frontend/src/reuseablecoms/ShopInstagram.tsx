import React from "react";

type Props = {};

const ShopInstagram = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-3  lg:w-[80%]">
      <h1 className="text-2xl font-bold">Shop Instagram</h1>
      <p>Elevate your wardrobe with fresh finds today!</p>

      <div className="grid w-full grid-cols-5 gap-3">
        <img className="h-full w-full rounded-2xl" src="./homeImgs/gallery-2.jpg" alt="" />
        <img className="h-full w-full rounded-2xl" src="./homeImgs/gallery-1.jpg" alt="" />
        <img className="h-full w-full rounded-2xl" src="./homeImgs/gallery-3.jpg" alt="" />
        <img className="h-full w-full rounded-2xl" src="./homeImgs/gallery-5.jpg" alt="" />
        <img className="h-full w-full rounded-2xl" src="./homeImgs/gallery-4.jpg" alt="" />
      </div>
    </div>
  );
};

export default ShopInstagram;
