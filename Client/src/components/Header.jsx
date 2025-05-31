import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Learnify</Link>
        
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-200">Courses</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-200">About</Link>
            </li>
          </ul>
        </nav>
        
        <div className="flex space-x-3">
          <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 