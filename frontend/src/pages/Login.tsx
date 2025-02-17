import Navbar from "@/reuseablecoms/Navbar";
import LogBody from "@/reuseablecoms/LogBody";
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import Footer from "@/reuseablecoms/Footer";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-white text-black">
      <Navbar />
      <CommonSmallBanner />
      <LogBody />
      <Footer />
    </div>
  );
}
