import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

type Props = {};

const isLogined = true;

export default function Navbar({}: Props) {
  return (
<<<<<<< HEAD
    <div className="navbar flex h-[100px] justify-center lg:w-[70%]">
      <div className="navbar-start">
=======
    <div className="navbar flex h-[100px] w-full justify-center bg-red-400">
      <div className="navbar-start bg-green-300">
>>>>>>> b22484c (Initial commit for backend and frontend setup)
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
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/"}>Shop</Link>
            </li>
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/"}>Blog</Link>
            </li>
            <li>
              <Link to={"/"}>Pages</Link>
            </li>
            <li>
              <Link to={"/"}>Buy Theme</Link>
            </li>
          </ul>
        </div>

        <a className="btn btn-ghost hidden text-xl lg:block">
          <img src="/homeImgs/logo.svg" alt="" />
        </a>
      </div>

      <a className="btn btn-ghost flex items-center justify-center text-xl lg:hidden">
        <img src="/homeImgs/logo.svg" alt="" />
      </a>

<<<<<<< HEAD
      <div className="navbar-center hidden text-black lg:block">
=======
      <div className="navbar-center hidden text-black lg:block bg-yell">
>>>>>>> b22484c (Initial commit for backend and frontend setup)
        <ul className="menu menu-horizontal px-1 text-[17px]">
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
            <Link to={"/pages"}>Pages</Link>
          </li>
          <li>
            <Link to={"/buytheme"}>Buy Theme</Link>
          </li>
        </ul>
      </div>
      {isLogined ? (
        <Button asChild className="border-2 border-black">
          <Link to={"/login"}>Login</Link>
        </Button>
      ) : (
        <div className="navbar-end flex gap-5 text-2xl text-black">
          <i>
            <IoSearch />
          </i>

          <i>
            <CgProfile />
          </i>

          <i>
            <FaRegHeart />
          </i>

          <i>
            <IoBagOutline />
          </i>
        </div>
      )}
    </div>
  );
}
