import Footer from "@/reuseablecoms/Footer";
import SwiperWrapper from "@/reuseablecoms/SwiperWrapper";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import AboutPageBody from "@/reuseablecoms/AboutPageBody";
import Teammembers from "@/reuseablecoms/Teammembers.tsx";
type Props = {};

const imgs: string[] = [
  "./homeImgs/anvouge.png",
  "./homeImgs/carolin.png",
  "./homeImgs/chery.png",
  "./homeImgs/ecomife.png",
  "./homeImgs/panadoxn.png",
  "./homeImgs/pennyw.png",
  "./homeImgs/shangxi.png",
  "./homeImgs/sopify.png",
  "./homeImgs/vanfaba.png",
  "./homeImgs/carolin.png",
  "./homeImgs/vanfaba.png",
  "./homeImgs/pennyw.png",
];

function AboutUs({}: Props) {
  return (
    <div className="w-screen bg-white">
      {/* <Navbar /> */}
      <CommonSmallBanner />
      <div className="flex flex-col items-center justify-center gap-6 p-4">
        <AboutPageBody />
        <SwiperWrapper />
        <div className="flex w-full flex-col items-center justify-center gap-16 p-4">
          <Teammembers />
          <Footer />
        </div>
        {/* <CarouselSpacing imgs={imgs} /> */}
      </div>
    </div>
  );
}

export default AboutUs;
