import React, { useState } from "react";
import {
  CiHeart,
  CiSearch,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/images";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "kids Collection",
    "Bath & Body",
    "Bed & Bath",
    "Trending Products",
    "Product Collections",
    "Discount offers",
  ];

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible((prev) => !prev);
  };

  const handleLogOut = () => {
    localStorage.clear();
    setIsDropdownVisible(false);
    navigate("/");
  };

  const handleClickCart = () => {
    navigate("/mycart");
  };

  const handleCategoryClick = (category) => {
    setIsCategoryDropdownVisible(false);
    const id = category.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = () => {
    const matchedCategory = categories.find(
      (cat) => cat.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (matchedCategory) {
      const id = matchedCategory.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert("Category not found");
    }
  };

  return (
    <div className="text-base font-sans text-black">
      {/* Top Banner - full width background, inner content padded */}
      <div className="bg-black text-white text-sm">
        <div className="px-12 py-2 flex justify-between items-center">
          <div>
            FREE SHIPPING ON $50+ FOR REWARDS MEMBERS SIGN IN OR JOIN DETAILS
          </div>
          <div className="flex gap-6 text-[#3FAB4E]">
            <a href="/main" className="hover:underline">HOME</a>
            <a href="/aboutus" className="hover:underline">ABOUT US</a>
            <a href="/signin" className="hover:underline">SIGN IN</a>
            <a href="/" className="hover:underline">SIGN UP</a>
          </div>
        </div>
      </div>
  
      {/* Main Header */}
      <div>
        <div className="px-12 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="h-16" />
          </div>
  
          {/* Search */}
          <div className="flex items-center relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#CFCFCF] p-3 pr-40 pl-6 outline-0 text-black"
              placeholder="Search anything..."
            />
  
            {/* Categories */}
            <div className="relative">
              <p
                className="cursor-pointer bg-[#91cb94] p-3 flex items-center gap-1 font-medium"
                onClick={toggleCategoryDropdown}
              >
                Categories <FaAngleDown />
              </p>
              {isCategoryDropdownVisible && (
                <div className="absolute bg-white border shadow-lg right-0 z-10 mt-1 w-48 font-medium">
                  <ul className="text-black">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleCategoryClick(cat)}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
  
            <button
              className="bg-[#197CC0] p-3"
              onClick={handleSearch}
            >
              <CiSearch className="text-white text-2xl" />
            </button>
          </div>
  
          {/* Icons */}
          <div className="flex gap-6 items-center">
            <CiHeart className="text-2xl cursor-pointer" />
            <CiShoppingCart
              className="text-2xl cursor-pointer"
              onClick={handleClickCart}
            />
            <div className="relative">
              <CiUser
                className="text-2xl cursor-pointer"
                onClick={toggleDropdown}
              />
              {isDropdownVisible && (
                <div className="absolute bg-black text-[#54ff6c] p-4 right-0 mt-2 rounded shadow-lg w-40">
                  <ul>
                    <li className="py-2 hover:underline cursor-pointer">Sign In</li>
                    <li className="py-2 hover:underline cursor-pointer">Sign Up</li>
                    <li
                      className="py-2 hover:underline cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </li>
                    <li className="py-2 hover:underline cursor-pointer">About Us</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  
      {/* Navigation Menu - full background */}
      <div className="bg-[#91cb94]">
        <div className="px-12 py-2">
          <ul className="flex items-center justify-center gap-10 font-medium text-lg">
            <li className="hover:underline cursor-pointer">New</li>
            <li className="hover:underline cursor-pointer">Diapers</li>
            <li className="hover:underline cursor-pointer">Wipes</li>
            <li className="hover:underline cursor-pointer">Bath & Body</li>
            <li className="hover:underline cursor-pointer">Bed & Bath</li>
            <li className="hover:underline cursor-pointer">Value Kits & Bundle Deals</li>
            <li className="hover:underline cursor-pointer">Sales & Discounts</li>
            <li className="hover:underline cursor-pointer">Gifts</li>
            <li className="flex items-center gap-1 cursor-pointer">
              More <FaAngleDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}  

export default Header;
