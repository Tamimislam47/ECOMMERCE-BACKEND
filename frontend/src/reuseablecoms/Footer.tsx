import { Button } from "@/components/ui/button";
import { AiOutlineMail } from "react-icons/ai";
import { CiPhone } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer flex w-[80%] justify-between  p-10 text-black">
      <nav>
        <h6 className="footer-title">
          <a href="#navbar">
            <img src="/homeImgs/logo.svg" alt="" />
          </a>
        </h6>
        <a className="link-hover link text-base-content">
          549 Oak St.Crystal Lake, IL 60014
        </a>
        <a className="link-hover link">
          <Button className="hover:text-red-500">
            GET DIRECTION
            <span>
              <CgArrowTopRight />
            </span>
          </Button>
        </a>
        <a className="link-hover link flex items-center justify-center gap-2">
          <span>
            <AiOutlineMail />
          </span>
          tamim.furious@gmail.com
        </a>
        <a className="link-hover link flex items-center justify-center gap-2">
          <span>
            <CiPhone />
          </span>
          01817401691
        </a>

        <div className="flex gap-3">
          <a
            href=""
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-black hover:border-0 hover:border-transparent hover:bg-[#4064AC] hover:text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-black hover:border-0 hover:border-transparent hover:bg-[#4064AC] hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href=""
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-black hover:border-0 hover:border-transparent hover:bg-[#4064AC] hover:text-white"
          >
            <FaTiktok />
          </a>
          <a
            href=""
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-2 border-black hover:border-0 hover:border-transparent hover:bg-[#4064AC] hover:text-white"
          >
            <CiLinkedin />
          </a>
        </div>
      </nav>
      <nav>
        <h6 className="footer-title font-semibold text-black">Information</h6>
        <a className="link-hover link">About us</a>
        <a className="link-hover link text-base-content">Size Guide</a>
        <a className="link-hover link text-base-content">Career</a>
        <a className="link-hover link text-base-content">Contact us</a>
        <a className="link-hover link text-base-content">My Account</a>
      </nav>

      <nav>
        <h6 className="footer-title">Customer Services</h6>
        <a className="link-hover link">Shipping</a>
        <a className="link-hover link">Return & Refund</a>
        <a className="link-hover link">Privacy Policy</a>
        <a className="link-hover link">Terms & Conditions</a>
        <a className="link-hover link">Orders FAQs</a>
        <a className="link-hover link">My Wishlist</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="flex h-[50px] items-center justify-center rounded-full border-[1px] border-black p-[1px]">
            <input
              type="text"
              className="h-full w-[85%] bg-transparent pl-4"
              placeholder="Enter Your E-mail "
            />
            <Button className="h-[92%] rounded-full bg-black text-white">
              <CgArrowTopRight />
            </Button>
          </div>
        </fieldset>

        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            className="h-4 w-4 rounded-sm border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ms-2 text-sm font-medium dark:text-gray-300"
          >
            By clicking subcribe, you agree to the
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Terms of Service and <br /> Privacy Policy.
            </a>
            .
          </label>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
