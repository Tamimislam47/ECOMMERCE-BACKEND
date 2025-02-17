import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import SideNav from "./SideNav";
import { navigationLinks } from "@/ObjDatas";
import { RiMenu2Line } from "react-icons/ri";
import React from "react";

// /homeImgs/gloo.svg;

type SubLinkType = {
  name: string;
  path: string;
};

type ListType = {
  path?: string;
  name: string;
  subLinks?: SubLinkType[];
};

const UlList: React.FC<ListType> = ({ path, name, subLinks }) => {
  return (
    <li>
      {subLinks ? (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="">
            {name}
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-box bg-white shadow hover:text-wrap"
          >
            {subLinks.map((subLink) => (
              <li key={subLink.path}>
                <Link
                  className="hover:bg-black hover:text-white"
                  to={subLink.path}
                >
                  {subLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link to={path || "#"}>{name}</Link>
      )}
    </li>
  );
};

export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="navbar w-full bg-transparent lg:w-[80%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>

            <img src="/homeImgs/logo.svg" alt="" className="hidden lg:block" />
          </div>
        </div>
        <div className="navbar-center">
          <img
            className="hidden md:block lg:hidden"
            src="/homeImgs/logo.svg"
            alt=""
          />

          <div className="hidden items-center lg:flex">
            <ul className="menu-horizontal gap-5 text-[17px]">
              {navigationLinks.map((link) => (
                <React.Fragment key={link.path}>
                  <UlList
                    name={link.name}
                    path={link.path}
                    subLinks={link.subLinks}
                  />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-circle btn-ghost">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge indicator-item badge-primary badge-xs"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

// <ul className="menu menu-horizontal flex items-center px-1 text-[17px]">
//   <li>
//     <Link to={"/"}>Home</Link>
//   </li>
//   <li>
//     <Link to={"/shop"}>Shop</Link>
//   </li>
//   <li>
//     <Link to={"/products"}>Products</Link>
//   </li>
//   <li>
//     <Link to={"/blog"}>Blog</Link>
//   </li>
//   <li>
//     <div className="dropdown dropdown-bottom">
//       <div tabIndex={0} role="button" className="border-0 bg-transparent">
//         Pages
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu dropdown-content z-[1] rounded-box bg-white shadow"
//       >
//         <li>
//           <Link to={"/aboutus"}>About Us</Link>
//         </li>
//         <li>
//           <Link to={"/storelist"}>Store List </Link>
//         </li>
//         <li>
//           <Link to={"/contactus"}>Contact Us </Link>
//         </li>
//         <li>
//           <Link to={"/faqs"}>FAQs </Link>
//         </li>
//         <li>
//           <Link to={"/feedbacks"}>Customer Feedbacks </Link>
//         </li>
//       </ul>
//     </div>
//   </li>
//   <li>
//     <Link to={"/buytheme"}>Buy Theme</Link>
//   </li>
// </ul>;
