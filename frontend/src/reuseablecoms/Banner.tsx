import { useEffect, useRef } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import gsap from "gsap";

type BannerType = {
  img: string;
  height?: string;
};

export default function Banner({ img, height }: BannerType) {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      gsap.fromTo(
        bannerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 },
      );

      gsap.fromTo(
        ".textAnimation",
        { y: 250, opacity: 0 },
        { y: 0, duration: 1.5, stagger: 0.5, opacity: 1 },
      );
    }
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`w-[99vw] tamim bg-cover bg-center lg:h-screen`}
      style={{
        backgroundImage: `url(${img})`,
        height: height,
      }}
    >
      <div className="flex h-full flex-col items-start justify-end bg-black bg-opacity-50 text-white">
        <ul className="flex flex-col items-start space-y-4 p-16 text-center">
          <li className="textAnimation text-3xl font-bold">
            BIKINS & SWIMSUITS
          </li>
          <li className="text-start">
            <p className="textAnimation text-7xl font-bold">
              Find Your <br /> Signature Style
            </p>
          </li>

          <button className="btn-rounded textAnimation btn border-white bg-white pl-6 pr-6 text-black">
            <span className="textAnimation">Explore Collection</span>
            <span>
              <LuArrowUpRight />
            </span>
          </button>
        </ul>
      </div>
    </div>
  );
}
