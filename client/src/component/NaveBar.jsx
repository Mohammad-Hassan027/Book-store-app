import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  HiMiniBars3CenterLeft,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import userImg from "../assets/avatar.png";
import { useAuth } from "../hooks/useAuth";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Cart", path: "/cart" },
  { name: "Checkout", path: "/checkout" },
  { name: "Dashboard", path: "/user-dashboard" },
  { name: "Orders", path: "/orders" },
  { name: "Email Verification", path: "/email-verification" },
];

function NaveBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, handleLogout } = useAuth();

  // Create a ref for the dropdown container
  const dropdownRef = useRef(null);

  // useEffect to handle clicks outside of the dropdown
  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener for mousedown
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef, isOpen]); // Rerun effect if dropdownRef or isOpen changes

  return (
    <header className="max-w-screen-2xl mx-auto px-3 md:px-8 py-6 bg-white sticky top-0 z-50 shadow-md">
      <nav className="w-full flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-12 gap-3">
          {/* home */}
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-8" />
          </Link>
          {/* search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-2 sm:left-3 inset-y-2" />

            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}

        <div className="relative flex items-center gap-2 md:gap-5 md:space-x-3 space-x-1.5 pr-1 md:px-8">
          <div ref={dropdownRef} className="relative">
            {currentUser ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer m-1 place-content-center"
                >
                  <picture className="inline-block hover:scale-105">
                    <img
                      className="size-8 sm:size-9 md:size-10 object-cover overflow-hidden rounded-2xl sm:rounded-3xl"
                      src={currentUser ? currentUser?.photo : userImg}
                      alt="user"
                    />
                  </picture>
                </button>
                {isOpen && (
                  <div className="absolute -right-15 sm:right-5 top-11 bg-white shadow-lg rounded-md p-3 sm:p-4 w-30 sm:w-36">
                    <ul className="space-y-2">
                      {navigations.map((nav) => (
                        <li key={nav.name}>
                          <Link
                            to={nav.path}
                            className="block text-gray-700 hover:text-blue-500 active:text-blue-600 text-sm font-medium"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {nav.name}
                          </Link>
                          <hr className="border-gray-300" />
                        </li>
                      ))}
                      <li>
                        <button
                          className="block text-red-500 hover:text-red-700 active:text-red-800 text-sm font-medium w-full text-left"
                          onClick={() => {
                            setIsOpen(!isOpen);
                            handleLogout();
                          }}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login" className="cursor-pointer">
                {" "}
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block cursor-pointer">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-yellow-400 text-white text-xl py-2 px-6 hidden md:flex items-center gap-3 rounded-sm cursor-pointer"
          >
            <HiOutlineShoppingCart className="size-7" />
            Basket
          </Link>
          <Link
            to="/cart"
            className="bg-yellow-400 text-white text-xl py-1.5 px-2 md:hidden items-center rounded-sm cursor-pointer"
          >
            <HiOutlineShoppingCart className="size-5" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NaveBar;
