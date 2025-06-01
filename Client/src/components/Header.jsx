import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Learnify</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
          <Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link>
          <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          <Link to="/login" className="hover:text-blue-200 transition-colors">Login</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-blue-100 transition-colors">Sign Up</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-blue-200 transition-colors">Courses</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            <Link to="/login" className="hover:text-blue-200 transition-colors">Login</Link>
            <Link to="/signup" className="bg-white text-blue-600 px-4 py-1 rounded-md hover:bg-blue-100 transition-colors text-center">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 