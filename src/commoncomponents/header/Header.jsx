import React, { useState, useEffect } from "react";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Logo } from "../../assets/images";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw",);
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleLogOut = () => {
    const tokenKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIyLCJ0eXBlIjoicmVjcnVpdGVyIiwiaWF0IjoxNzQwNzQzNTk5LCJleHAiOjE3NDA4MDM1OTksImF1ZCI6Imh0dHBzOi8vZGV2LmRleHRhLmlvIiwiaXNzIjoiMjdjYWY1MmMtZjFhMy00YTlkLTg5NDItYmIxMzM2MDM5OWY0Iiwic3ViIjoiYmthcmFtYXQrZGV2ZW50ZXJhZnRlckBjb2RlLWZyZWFrcy5jb20ifQ.m6eZyjs0tEAMgZ1SoR2AUJX6OGRgChfj9CTLmfyQwfyyi-hm_DW2QXhtsaaHxrCuXz-QyNGU6ia2oSPg_rriEkRj5snJ_2d53yIvNePHaKpJCVUX9_fiVwiQdXX9rNRhcf1XK9rWfI-KR-GtigkPUdyymB8HWoBwILx9vKjrKaWJCd5mYVAGM7BqkX4iHEGeGCUBytLVi4N3SdLma5x9qR1xPZ2UUObsdkUQWH7df1Pl8BaQs1DjTGDVV2_Ian5kTvyDM63s6AeOvPGtgqW7-kwi1CmynygtwMQcxU0gZv1QPOjthXZE-kKoNhOwqdcamb3MVC6tH01OwG0FGvuuGw";
    localStorage.removeItem(tokenKey);
    setIsLoggedIn(false);
    setIsDropdownVisible(false);
    navigate("/"); // Navigate to Sign In page after logout
  };

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
          {!isLoggedIn ? (
            <>
              <a href="/signin" className="hover:underline">
                SIGN IN
              </a>
              <a href="/" className="hover:underline">
                SIGN UP
              </a>
            </>
          ) : (
            <a href="#" className="hover:underline" onClick={handleLogOut}>
              LOG OUT
            </a>
          )}
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
            <CiUser
              className="text-2xl cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownVisible && (
              <div className="absolute bg-black text-[#54ff6c] p-4 right-[20px] mt-2 rounded shadow-lg w-40">
                <ul>
                  {!isLoggedIn ? (
                    <>
                      <li className="py-2 hover:underline cursor-pointer">
                        Sign In
                      </li>
                      <li className="py-2 hover:underline cursor-pointer">
                        Sign Up
                      </li>
                    </>
                  ) : (
                    <li
                      className="py-2 hover:underline cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </li>
                  )}
                  <li className="py-2 hover:underline cursor-pointer">
                    About Us
                  </li>
                </ul>
              </div>
            )}
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
