import Navbar from "@/reuseablecoms/Navbar";
import LogBody from "@/reuseablecoms/LogBody";
import img from "/homeImgs/loginImg1.jpg"; // Ensure this path is correct

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="flex w-screen flex-col items-center justify-center bg-white text-black">
      <Navbar />
      <div
        className="h-[30vh] w-screen bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <LogBody />
    </div>
  );
}
