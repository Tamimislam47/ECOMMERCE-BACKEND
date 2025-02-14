import Navbar from "@/reuseablecoms/Navbar";
import LogBody from "@/reuseablecoms/LogBody";
// Ensure this path is correct
import CommonSmallBanner from "@/reuseablecoms/CommonSmallBanner";
import Products from "@/reuseablecoms/Products";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-white text-black">
      <Navbar />
      <CommonSmallBanner />

      <LogBody />
    </div>
  );
}
