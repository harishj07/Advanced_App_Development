import React from 'react';

const Navbar = () => {
  return (
    <nav
      className={`bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-6 flex justify-between items-center font-display shadow-md`}
    >
      <h1 className="text-2xl font-bold">British English Certificate</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-lg hover:text-gray-200">Home</a></li>
        <li><a href="#" className="text-lg hover:text-gray-200">Contact</a></li>
        <li><a href="#" className="text-lg hover:text-gray-200">Login</a></li>
        <li><a href="#" className="text-lg hover:text-gray-200">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
