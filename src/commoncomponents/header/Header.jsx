import React, { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/images";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] =
    useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
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

  

  const categories = [
    "kids Collection",
    "Bath & Body",
    "Bed & Bath",
    "Trending Products",
    "Product Collections",
    "Discount offers",
  ];

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-black text-white text-sm px-12 py-2 flex justify-between items-center">
        <div>
          FREE SHIPPING ON $50+ FOR REWARDS MEMBERS SIGN IN OR JOIN DETAILS
        </div>
        <div className="flex gap-6 text-[#3FAB4E] font-medium">
          <a href="/main" className="hover:underline">
            HOME
          </a>
          <a href="/aboutus" className="hover:underline">
            ABOUT US
          </a>
          <a href="/signin" className="hover:underline">
            SIGN IN
          </a>
          <a href="/" className="hover:underline">
            SIGN UP
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex px-4 justify-between items-center">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div className="flex items-center relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#CFCFCF] p-4 pr-40 pl-6 items-start outline-0"
            placeholder="Search anything..."
          />

          {/* Categories Dropdown */}
          <div className="relative">
            <p
              className="cursor-pointer bg-[#91cb94] p-4 flex items-center gap-1"
              onClick={toggleCategoryDropdown}
            >
              Categories <FaAngleDown />
            </p>
            {isCategoryDropdownVisible && (
              <div className="absolute bg-white border shadow-lg right-0 z-10 mt-1 w-48">
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

          <p className="cursor-pointer bg-[#197CC0] p-4">
            <CiSearch className="text-white text-2xl" onClick={handleSearch}/>
          </p>
        </div>

        <div className="flex gap-4 items-center justify-between pr-12">
          <span>
            <CiHeart className="text-2xl" />
          </span>
          <span>
            <CiShoppingCart className="text-2xl" onClick={handleClickCart} />
          </span>
          <span>
            <CiUser
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownVisible && (
              <div className="absolute bg-black text-[#54ff6c] p-4 right-[20px] mt-2 rounded shadow-lg w-40">
                <ul>
                  <li className="py-2 hover:underline cursor-pointer">
                    Sign In
                  </li>
                  <li className="py-2 hover:underline cursor-pointer">
                    Sign Up
                  </li>
                  <li
                    className="py-2 hover:underline cursor-pointer"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </li>
                  <li className="py-2 hover:underline cursor-pointer">
                    About Us
                  </li>
                </ul>
              </div>
            )}
          </span>
        </div>
      </div>

      {/* Navigation Menu */}
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
