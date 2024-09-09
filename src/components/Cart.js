import React, { useState, useEffect } from 'react';
import { FaTrashAlt, FaPlus, FaMinus, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [openSections, setOpenSections] = useState({});
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Simulate API fetch
  useEffect(() => {
    const mockData = [
      { id: 1, resourceType: 'Storage', resourceName: 'AWS S3 Service', price: 2.95, quantity: 1 },
      { id: 2, resourceType: 'Storage', resourceName: 'AWS S3 Service', price: 2.95, quantity: 2 },
      { id: 3, resourceType: 'Compute', resourceName: 'AWS EC2 Service', price: 12.99, quantity: 1 },
      { id: 4, resourceType: 'Compute', resourceName: 'AWS EC2 Service', price: 12.99, quantity: 3 },
      { id: 5, resourceType: 'Database', resourceName: 'AWS RDS Service', price: 8.50, quantity: 2 },
    ];

    setCartItems(mockData);
    calculateTotal(mockData);
  }, []);

  const calculateTotal = (items) => {
    const totalCost = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalCost.toFixed(2));
  };

  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleQuantityChange = (id, amount) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + amount;
        if (newQuantity < 1) return item;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const toggleSection = (resourceType) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [resourceType]: !prevOpenSections[resourceType],
    }));
  };

  const getResourceTypes = () => {
    const types = [...new Set(cartItems.map(item => item.resourceType))];
    return types;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black p-4">
      <h1 className="mt-40 text-3xl md:text-5xl font-bold text-white mb-6">Cart</h1>

      <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
        <div className="overflow-x-auto">
          {getResourceTypes().map((resourceType) => (
            <div key={resourceType} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer bg-gray-200 p-2 rounded-lg"
                onClick={() => toggleSection(resourceType)}
              >
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {resourceType}
                </h2>
                {openSections[resourceType] ? (
                  <FaChevronUp size={18} />
                ) : (
                  <FaChevronDown size={18} />
                )}
              </div>

              {openSections[resourceType] && (
                <table className="w-full mt-2 bg-white">
                  <thead>
                    <tr className="text-left">
                      <th className="px-2 py-2 text-xs sm:text-sm md:text-base text-gray-600">Resource Name</th>
                      <th className="px-2 py-2 text-xs sm:text-sm md:text-base text-gray-600">Price</th>
                      <th className="px-2 py-2 text-xs sm:text-sm md:text-base text-gray-600">Quantity</th>
                      <th className="px-2 py-2 text-xs sm:text-sm md:text-base text-gray-600">Total</th>
                      <th className="px-2 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems
                      .filter(item => item.resourceType === resourceType)
                      .map(item => (
                        <tr
                          key={item.id}
                          className="border-t border-gray-200 relative"
                          onMouseEnter={() => setActiveTooltip(item.id)}
                          onMouseLeave={() => setActiveTooltip(null)}
                          onTouchStart={() => setActiveTooltip(item.id)}
                        >
                          <td
                            className="px-2 py-2 text-xs sm:text-sm md:text-base truncate"
                            onClick={() => setActiveTooltip(item.id)}
                          >
                            {item.resourceName}
                            {activeTooltip === item.id && (
                              <div className="absolute top-full left-0 mt-1 p-2 bg-gray-800 text-white text-xs rounded-md">
                                {item.resourceName}
                              </div>
                            )}
                          </td>
                          <td className="px-2 py-2 text-xs sm:text-sm md:text-base">${item.price.toFixed(2)}</td>
                          <td className="px-2 py-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, -1)}
                                className="text-gray-500 hover:text-black transition-all transform hover:scale-110 focus:outline-none"
                              >
                                <FaMinus size={14} />
                              </button>
                              <span className="text-xs sm:text-sm md:text-base">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, 1)}
                                className="text-gray-500 hover:text-black transition-all transform hover:scale-110 focus:outline-none"
                              >
                                <FaPlus size={14} />
                              </button>
                            </div>
                          </td>
                          <td className="px-2 py-2 text-xs sm:text-sm md:text-base">${(item.price * item.quantity).toFixed(2)}</td>
                          <td className="px-2 py-2">
                            <button
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-600 hover:text-red-800 transition-all transform hover:scale-110 focus:outline-none"
                            >
                              <FaTrashAlt size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg md:text-xl font-semibold">Total</h2>
          <span className="text-lg md:text-xl font-semibold text-gray-800">${total}</span>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            className="w-full md:w-auto px-4 py-2 sm:px-8 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => console.log(`Proceeding to checkout with total: $${total}`)}
          >
            Submit Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
