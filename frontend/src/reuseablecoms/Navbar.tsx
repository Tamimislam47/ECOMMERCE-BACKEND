import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import SideNav from "./SideNav";

const isLogined = true;

export default function Navbar() {
  return (
    <div id="navbar" className="navbar flex h-[100px] w-full justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <SideNav />
        </div>

        <a className="btn btn-ghost hidden text-xl lg:block">
          <img src="/homeImgs/logo.svg" alt="" />
        </a>
      </div>

      <a className="btn btn-ghost flex items-center justify-center text-xl lg:hidden">
        <img src="/homeImgs/logo.svg" alt="" />
      </a>

      <div className="bg-yell navbar-center hidden text-black lg:block">
        <ul className="menu menu-horizontal flex items-center px-1 text-[17px]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <div className="dropdown dropdown-bottom">
              <div
                tabIndex={0}
                role="button"
                className="border-0 bg-transparent"
              >
                Click
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] rounded-box bg-white shadow"
              >
                <li>
                  <Link to={"/aboutus"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/storelist"}>Store List </Link>
                </li>
                <li>
                  <a>Contact Us </a>
                </li>
                <li>
                  <a>FAQs </a>
                </li>
                <li>
                  <a>Customer Feedbacks </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"/buytheme"}>Buy Theme</Link>
          </li>
        </ul>
      </div>
      {isLogined ? (
        <div className="navbar-end flex gap-5 text-2xl text-black">
          <i className="hover:cursor-pointer">
            <IoSearch />
          </i>

          <i className="hover:cursor-pointer">
            <CgProfile />
          </i>

          <i className="relative hover:cursor-pointer">
            <Link to={"/wishlist"}>
              {" "}
              <FaRegHeart />
            </Link>
            <div className="absolute right-[-5px] top-[-5px] z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-500 text-[14px] text-white">
              1
            </div>
          </i>

          <i className="relative hover:cursor-pointer">
            <IoBagOutline />
            <div className="absolute right-[-5px] top-[-5px] z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-500 text-[14px] text-white">
              1
            </div>
          </i>
        </div>
      ) : (
        <Button asChild className="border-2 border-black">
          <Link to={"/login"}>Login</Link>
        </Button>
      )}
    </div>
  );
}
