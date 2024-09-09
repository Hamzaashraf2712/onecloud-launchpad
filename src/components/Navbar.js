import React, { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa'; // Importing icons from react-icons

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(true); // Simulating authentication state
  const [cartItems, setCartItems] = useState(3); // Example of cart item count

  return (
    <nav className="font-inter bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <span className="text-base md:text-lg font-bold font-inter">OneCloud</span>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-2 md:space-x-4 items-center">
        {!isAuth && (
          <>
            {/* Before login navbar */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded">
              Create new project
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded">
              Go to my project
            </button>
          </>
        )}

        {isAuth && (
          <>
            {/* After login navbar */}
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded">
              Onboard My Environment
            </button>

            {/* Cart Icon with Hamburger */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <div className="relative">
                <FaShoppingCart className="text-white text-xl" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 inline-block w-3 h-3 text-[10px] font-bold text-center text-white bg-red-600 rounded-full">
                    {cartItems}
                  </span>
                )}
              </div>

              {/* Hamburger Icon */}
              <button className="text-white text-xl">
                <FaBars />
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
