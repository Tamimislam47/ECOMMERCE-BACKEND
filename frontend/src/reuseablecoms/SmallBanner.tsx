import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";

type Props = {
  targetDate?: number | string;
};

export default function SmallBanner({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: number | string) {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className="grid w-[78%] grid-cols-1 place-items-center gap-4 md:grid-cols-3">
      {/* Text Section */}
      <div className="flex h-full w-full flex-col justify-center gap-4 md:col-span-1">
        <h1 className="text-2xl font-semibold">Limited-Time Deals On!</h1>
        <p>Up to 50% Off Selected Styles. Don't Miss Out.</p>
        <Button className="w-[150px] rounded-full bg-black text-white">
          Shop Now{" "}
          <span>
            <CgArrowTopRight />
          </span>
        </Button>
      </div>

      {/* Image Section */}
      <div className="order-last  h-full bg-center md:order-none md:col-span-1">
        <img
          className="h-[35vh]"
          src="./homeImgs/img-countdown1.png"
          alt="Countdown"
        />
      </div>

      {/* Countdown Section */}
      <div className="flex items-center justify-center gap-4 text-xl font-bold md:col-span-1">
        {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds >
        0 ? (
          <div className="flex gap-5 text-6xl">
            <div className="flex flex-col gap-2">
              <p>{timeLeft.days}</p> <p className="text-sm">Days</p>
            </div>
            <span className="text-2xl">:</span>
            <div className="flex flex-col gap-2">
              <p>{timeLeft.hours}</p> <p className="text-sm">Hours</p>
            </div>
            <span className="text-2xl">:</span>
            <div className="flex flex-col gap-2">
              <p> {timeLeft.minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <span className="text-2xl">:</span>
            <div className="flex flex-col gap-2">
              <p>{timeLeft.seconds}</p> <p className="text-sm">Seconds</p>
            </div>
          </div>
        ) : (
          <div className="text-red-600">Time's Up!</div>
        )}
      </div>
    </div>
  );
}
