import logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { MdConnectWithoutContact } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const [responsive, setResponsive]: any = useState(false);
  return (
    <div dir="rtl">
      <nav className="block w-full px-4 py-2 mx-auto text-white bg-black border shadow-md rounded-xl border-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-blue-900 ">
          <a
            className="mr-4 block cursor-pointer py-1.5 text-base leading-relaxed"
            href="/"
          >
            <img src={logo} alt="" width={100} height={100} />
          </a>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0  lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <FaHome className="text-lg" />
                <a href="/" className="flex items-center">
                  خانه
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <VscAccount className="text-lg" />
                <a href="/Profile" className="flex items-center">
                  پروفایل
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <MdConnectWithoutContact className="text-lg" />
                <a href="/Contact" className="flex items-center">
                  تماس باما
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <BsFillInfoSquareFill className="text-lg" />
                <a href="/About" className="flex items-center">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => {
              setResponsive(!responsive);
            }}
            className="relative ml-auto h-6 mx-h-[40px] w-6 mx-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium transition-all lg:hidden"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2">
              <AiOutlineMenuFold className="text-2xl text-white" />
            </span>
          </button>
        </div>
        {responsive ? (
          <div className="lg:hidden">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0  lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <FaHome className="text-lg" />
                <a href="/" className="flex items-center">
                  خانه
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <VscAccount className="text-lg" />
                <a href="/Profile" className="flex items-center">
                  پروفایل
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <MdConnectWithoutContact className="text-lg" />
                <a href="/Contact" className="flex items-center">
                  تماس باما
                </a>
              </li>
              <li className="flex items-center p-1 text-sm font-medium leading-normal gap-x-2 text-blue-100">
                <BsFillInfoSquareFill className="text-lg" />
                <a href="/About" className="flex items-center">
                  درباره ما
                </a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Navbar;
