import Footer from "@/reuseablecoms/Footer";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import Navbar from "@/reuseablecoms/Navbar";
import StoreBody from "@/reuseablecoms/StoreBody";

type Props = {};

const StoreLocationPage = (props: Props) => {
  return (
    <div className="w-full bg-white">
      <Navbar />
      <CommonSmallBanner />
      <div className="flex w-full flex-col items-center justify-center gap-10  p-4">
        <StoreBody />
        <Footer />
      </div>
    </div>
  );
};
export default StoreLocationPage;
