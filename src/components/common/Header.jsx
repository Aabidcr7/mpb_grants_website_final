import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-11 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-global-2 font-poppins">
              MyProBuddy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#grants" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Explore Grants
            </a>
            <a href="#experts" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Our Experts
            </a>
            <a href="#templates" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Grant Templates
            </a>
            <a href="#success" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Success Stories
            </a>
            <a href="#blog" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Blog
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-global-5 text-global-17 font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-red-600 transition-colors">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-global-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4 border-t border-gray-100 pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#grants" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Explore Grants
            </a>
            <a href="#experts" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Our Experts
            </a>
            <a href="#templates" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Grant Templates
            </a>
            <a href="#success" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Success Stories
            </a>
            <a href="#blog" className="text-global-1 hover:text-global-15 transition-colors font-poppins font-medium text-sm">
              Blog
            </a>
            <div className="pt-2">
              <Button className="bg-global-5 text-global-17 font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg w-full">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;