import React, { useState } from 'react';
import GetStartedPopup from './GetStartedPopup';
import Button from '../ui/Button';

const Header = ({ darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header
      className={`w-full shadow-sm border-b ${darkMode ? '' : 'bg-global-11 border-gray-100'}`}
      style={darkMode ? { background: '#111', borderColor: '#111' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" rel="noopener noreferrer" className="flex items-center">
              {darkMode ? (
                <img
                  src="/images/log.png"
                  alt="MyPitchDeck Logo"
                  className="w-[40px] sm:w-[50px] lg:w-[60px] h-auto"
                />
              ) : (
                <img
                  src="/images/img_header_logo.png"
                  alt="MyPitchDeck Logo"
                  className="w-[150px] sm:w-[180px] lg:w-[230px] h-auto"
                />
              )}
            </a>
          </div>

          {/* Desktop Navigation */}
      

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className={
                darkMode
                  ? 'bg-white text-black hover:bg-[#ef3e25] font-poppins font-semibold text-xs px-4 py-1.5 rounded-md transition-colors'
                  : 'bg-global-5 text-global-17 hover:bg-red-600 font-poppins font-semibold text-xs px-4 py-1.5 rounded-md transition-colors'
              }
              onClick={() => setShowPopup(true)}
            >
              Work with Our Experts
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-global-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t ${darkMode ? 'border-black' : 'border-gray-100'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <div className="pt-2">
              <Button
                className={
                  darkMode
                    ? 'bg-white text-black hover:bg-[#ef3e25] font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg w-full transition-colors'
                    : 'bg-global-5 text-global-17 hover:bg-red-600 font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg w-full transition-colors'
                }
                onClick={() => setShowPopup(true)}
              >
                Work with Our Experts
              </Button>
            </div>
          </div>
        </nav>
        {/* Popup Modal for Get Started */}
        {showPopup && <GetStartedPopup onClose={() => setShowPopup(false)} />}
      </div>
    </header>
  );
};

export default Header;