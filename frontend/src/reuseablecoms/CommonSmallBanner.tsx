import React from 'react'
import img from "/homeImgs/loginImg1.jpg";
type Props = {}

function CommonSmallBanner({}: Props) {
  return (
    <div
      className="h-[30vh] w-screen bg-cover"
      style={{
        backgroundImage: `url(${img})`,
      }}
    ></div>
  );
}

export default CommonSmallBanner