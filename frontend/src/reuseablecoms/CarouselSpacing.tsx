import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ImgsType = {
  imgs: Array<string>;
};

const CarouselSpacing: React.FC<ImgsType> = ({ imgs }) => {
  return (
    <div className="= flex h-[150px] w-screen items-center justify-center">
      <Carousel className="flex h-full w-full items-center justify-center">
        <CarouselContent className="h-full">
          {imgs.map((imgs, id) => (
            <CarouselItem
              key={id}
              className="md:basis-1/8 flex bg-red-800 h-full items-center gap-3  pl-1 lg:basis-1/12"
            >
              <div>
                <Card className="bg-green-300">
                  <CardContent className="bg-red-300 bg-cover">
                    <img src={imgs} alt="" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSpacing;
