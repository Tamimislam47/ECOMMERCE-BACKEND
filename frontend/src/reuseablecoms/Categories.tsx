<<<<<<< HEAD
// import React from "react";

// type Props = {

// };

// export default function Categories({}: Props) {
//   return (
//     <div className="card mt-5  w-96 rounded-full">
//       <figure className=" rounded-full">
//         <img
//           src="./homeImgs/cls-circle3.jpg"
//           alt="Shoes"
//           className="rounded-full"
//         />
//       </figure>
//       <div className="card-body items-center text-center">
//         <h2 className="card-title">New In</h2>
//         <p>12 items</p>
//       </div>
//     </div>
//   );
// }

import * as React from "react";

=======
>>>>>>> b22484c (Initial commit for backend and frontend setup)
import { Card, CardContent } from "../components/ui/card.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
<<<<<<< HEAD
import { title } from "process";
=======
>>>>>>> b22484c (Initial commit for backend and frontend setup)

const CategoriesObj = [
  {
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
  },
  {
<<<<<<< HEAD
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
  },
  {
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
  },
  {
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
  },
  {
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
=======
    id: 2,
    img: "./homeImgs/cls-circle3.jpg",
    title: "Best Seller",
    count: "20items",
  },
  {
    id: 3,
    img: "./homeImgs/cls-circle3.jpg",
    title: "Trending",
    count: "15items",
  },
  {
    id: 4,
    img: "./homeImgs/cls-circle3.jpg",
    title: "On Sale",
    count: "8items",
  },
  {
    id: 5,
    img: "./homeImgs/cls-circle3.jpg",
    title: "Featured",
    count: "5items",
>>>>>>> b22484c (Initial commit for backend and frontend setup)
  },
];

export default function Categories() {
  return (
<<<<<<< HEAD
    <div className="w-[70vw] mx-auto space-y-8">
      {/* Title Section */}
      <div className="text-center space-y-2 flex  justify-between">
        <h1 className="text-3xl font-bold text-black">
          Categories You Might Like
        </h1>
        <p className="underline text-black font-bold cursor-pointer">
=======
    <div className="mx-auto w-[80%] space-y-8 bg-red-400">
      {/* Title Section */}
      <div className="flex justify-between space-y-2 text-center">
        <h1 className="text-3xl font-bold text-black">
          Categories You Might Like
        </h1>
        <p className="cursor-pointer font-bold text-black underline">
>>>>>>> b22484c (Initial commit for backend and frontend setup)
          View All Collection
        </p>
      </div>

      {/* Carousel Section */}
<<<<<<< HEAD
      <Carousel className="max-w-full overflow-hidden">
        <CarouselContent className="flex space-x-4">
          {CategoriesObj.map((category, index) => (
            <CarouselItem
              key={index}
              className="shrink-0 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col gap-4 items-center justify-center p-6">
                    <img
                      src={category.img}
                      className="rounded-full w-[300px] h-[300px] object-cover"
                      alt={category.title || "Category Image"}
                    />
                    <h2 className="text-lg font-bold">{category.title}</h2>
                    <h3 className="text-sm text-gray-500">{category.count}</h3>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
=======
      div
>>>>>>> b22484c (Initial commit for backend and frontend setup)
    </div>
  );
}
