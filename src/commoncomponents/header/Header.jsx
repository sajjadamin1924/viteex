import React from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Logo } from "../../assets/images";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="bg-black text-white text-sm px-12 py-2 flex justify-between items-center">
        <div>
          FREE SHIPPING ON $50+ FOR REWARDS MEMBERS SIGN IN OR JOIN DETAILS
        </div>
        <div className="flex gap-6 text-[#3FAB4E] font-medium">
          <a href="#" className="hover:underline">
            HOME
          </a>
          <a href="#" className="hover:underline">
            ABOUT US
          </a>
          <a href="#" className="hover:underline">
            SIGN IN
          </a>
          <a href="#" className="hover:underline">
            SIGN UP
          </a>
        </div>
      </div>
      <div className="flex px-4 justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center">
          <input
            type="text"
            className="bg-[#CFCFCF] p-4 pr-20 pl-12 items-start outline-0"
            placeholder="Search anything..."
          />
          <p className="cursor-pointer bg-[#91cb94] p-4 flex items-center justify-between">
            Categories <FaAngleDown />
          </p>

          <p className="cursor-pointer bg-[#197CC0] p-4">
            <CiSearch className="text-white text-2xl" />
          </p>
        </div>

        <div className="flex gap-4 items-center justify-between">
          <span>
            <CiHeart className="text-2xl" />
          </span>
          <span>
            <CiShoppingCart className="text-2xl" />
          </span>
          <span>
            <CiUser className="text-2xl" />
          </span>
        </div>
      </div>

      <div className=" bg-[#91cb94] py-2">
        <ul className="flex items-center justify-center gap-14">
          <li>New</li>
          <li>Diapers</li>
          <li>Wipes</li>
          <li>Bath & Body</li>
          <li>Bed & Bath</li>
          <li>Value Kits & Bundle Deals</li>
          <li>Sales & Discounts</li>
          <li>Gifts</li>
          <li className="flex items-center gap-1">
            More <FaAngleDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
