import Navbar from "@/reuseablecoms/Navbar";
import Footer from "@/reuseablecoms/Footer";
import FaqsBody from "@/reuseablecoms/FaqsBody";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
type Props = {};

const Faqs = (props: Props) => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <CommonSmallBanner />
      <div className="flex w-full flex-col items-center justify-center gap-16 p-4">
        <FaqsBody />
        <Footer />
      </div>
    </div>
  );
};

export default Faqs;
