import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ isAuth }) => {
  const navigate = useNavigate();

  return (
    <nav className="font-inter bg-black text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="text-base md:text-lg font-bold"> {/* Link to homepage */}
          OneCloud
        </Link>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-2 md:space-x-4 items-center">
        {!isAuth ? (
          <>
            <button 
              onClick={() => navigate('/create-new-project')}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded"
            >
              Create new project
            </button>
            <button 
              onClick={() => navigate('/validate-project')}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded"
            >
              Go to my project
            </button>
          </>
        ) : (
          <>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs md:text-sm py-2 px-3 md:px-4 rounded">
              Onboard My Environment
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button onClick={() => navigate('/cart')} className="text-white text-xl">
                  <FaShoppingCart className="text-white text-xl" />
                </button>
                {/* Cart logic here */}
              </div>

              <FaBars />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
