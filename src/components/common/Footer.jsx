import React from 'react';
import { Youtube, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white pt-16 pb-8" style={{ background: '#111' }}>
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Left section - Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
               <a href="https://myprobuddy.com" target="_blank" rel="noopener noreferrer">
        <img 
  src="/images/log.png" 
  alt="MyPitchDeck Logo" 
  className="w-[40px] sm:w-[50px] lg:w-[60px] h-auto"
/>


               </a>
              <div className="w-10 h-10 mr-3">
               
             
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Raise Funds like a PRO<br />
              with your ProBuddy
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-8">
  <a
    href="https://youtube.com/@myprobuddy?si=VKVR7TbVAB8Hc0uK"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube size={20} color="#FF0000" />
  </a>
  <a
    href="https://www.linkedin.com/company/myprobuddy/"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={20} color="#0077B5" />
  </a>
  <a
    href="https://www.instagram.com/myprobuddy/"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={20} color="#E1306C" />
  </a>
</div>

          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://debt.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Debt Funding
                </a>
              </li>
              <li>
                <a href="https://grants.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Grants
                </a>
              </li>
              <li>
                <a href="https://equity.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Equity Funding
                </a>
              </li>
            </ul>
          </div>
          
          {/* Explore More */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Explore More</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://investor.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Investor
                </a>
              </li>
              <li>
                <a href="https://partners.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Partners
                </a>
              </li>
              <li>
                <a href="https://portfolio.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="https://grants.myprobuddy.com/chatbot" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Grants AI Agent
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
           <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.myprobuddy.com/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.myprobuddy.com/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="https://www.myprobuddy.com/founders-insights" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="https://myprobuddy.zohorecruit.in/jobs/Careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://www.myprobuddy.com/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © MyProBuddy, {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;