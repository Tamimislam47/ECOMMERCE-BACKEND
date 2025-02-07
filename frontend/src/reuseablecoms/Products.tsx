import React from "react";
import Button from "@mui/material/Button";

type Props = {};

const Card = () => {
  return (
<<<<<<< HEAD
    <div className="flex min-h-[50vh] w-full flex-col gap-2">
      <div className="relative h-[80%] w-full rounded-xl bg-cover bg-center">
        <img src="./homeImgs/women-9.jpg" alt="" className="h-full w-full" />
=======
    <div className="flex h-full w-full flex-col gap-2">
      <div className="relative flex h-[80%] w-full flex-col rounded-xl bg-green-300 bg-cover bg-center">
        <div className="absolute inset-0">
          <img
            src="./homeImgs/women-9.jpg"
            alt=""
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
>>>>>>> b22484c (Initial commit for backend and frontend setup)
        <Button
          sx={{
            background: "red",
            display: "absolute",
            bottom: "50px",
<<<<<<< HEAD
            width: "100%",
            marginLeft: "10px",
            marginRight: "10px",
=======
            width: "90%",
            margin: "auto",
>>>>>>> b22484c (Initial commit for backend and frontend setup)
          }}
        >
          Add To Cart
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3>Reamie shirt with pockets</h3>
        <p>$100</p>
        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:border-2">
            <p className="h-1/2 w-1/2 rounded-full bg-red-500"></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Products({}: Props) {
  return (
<<<<<<< HEAD
    <div className="w-[70%] space-y-8">
      {/* Navigation */}
      <nav className="flex justify-center gap-4">
        <ul className="flex gap-6">
          <li className="text-xl font-bold hover:cursor-pointer hover:underline">
            New Arrivals
          </li>
          <li className="text-xl font-bold hover:cursor-pointer hover:underline">
            Best Seller
          </li>
          <li className="text-xl font-bold hover:cursor-pointer hover:underline">
            On Sale
          </li>
        </ul>
      </nav>

      {/* Products Rows */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
=======
    <div className="w-[80%] bg-yellow-300 h-2
      {/* Navigation */}
     

      {/* Products Rows */}
     
>>>>>>> b22484c (Initial commit for backend and frontend setup)
    </div>
  );
}
