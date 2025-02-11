import { Card, CardContent } from "../components/ui/card.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CategoriesObj = [
  {
    id: 1,
    img: "./homeImgs/cls-circle3.jpg",
    title: "New In",
    count: "12items",
  },
  {
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
  },
];

export default function Categories() {
  return (
    <div className="mx-auto space-y-8 sm:w-full lg:w-[80%]">
      {/* Title Section */}
      <div className="flex justify-between space-y-2 text-center">
        <h1 className="text-3xl font-bold text-black">
          Categories You Might Like
        </h1>
        <p className="cursor-pointer font-bold text-black underline">
          View All Collection
        </p>
      </div>

      {/* Carousel Section */}
    </div>
  );
}
