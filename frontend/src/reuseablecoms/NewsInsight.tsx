import React from "react";
import { Link } from "react-router-dom";
type ReviewCardType = {
  img: string;
  date: string;
  title: string;
  smallbody: string;
};

const ReviewCard: React.FC<ReviewCardType> = ({
  img,
  date,
  title,
  smallbody,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg lg:p-5">
      <img src={img} alt="" className="rounded-xl" />

      <div className="flex flex-col gap-2">
        <p className=""> {date} </p>
        <p className="text-2xl font-semibold hover:underline">
          <Link to={"/singleblog"}>{title}</Link>
        </p>
        <p>{smallbody}</p>
      </div>
    </div>
  );
};

const NewsInsight = (props: Props) => {
  return (
    <div className="flex w-[80%] flex-col items-center justify-center gap-4 ">
      <h1 className="text-3xl font-semibold">News insight</h1>
      <p>Browse our Top Trending: the hottest picks loved by all.</p>

      <div className="grid w-full grid-cols-3 gap-3">
        <ReviewCard
          date="16 AUGUST"
          title="Top 10 Summer Fashion Trends You Can't Miss in 2024"
          img={"./homeImgs/blog-grid-8.jpg"}
          smallbody="Lem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem..."
        />
        <ReviewCard
          date="16 AUGUST"
          title="Top 10 Summer Fashion Trends You Can't Miss in 2024"
          img={"./homeImgs/blog-grid-1.jpg"}
          smallbody="Lem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem..."
        />
        <ReviewCard
          date="16 AUGUST"
          title="Top 10 Summer Fashion Trends You Can't Miss in 2024"
          img={"./homeImgs/blog-grid-6.jpg"}
          smallbody="Lem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem..."
        />
      </div>
    </div>
  );
};

export default NewsInsight;
