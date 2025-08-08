import React, { useState, useEffect } from 'react';
        import { motion } from 'framer-motion';
        import Modal from '../ui/Modal';
        import Button from '../ui/Button';

        const GrantbotPopup = () => {
          const [showPopup, setShowPopup] = useState(false);

          useEffect(() => {
            // Always show popup on every refresh after 1 second
            const timer = setTimeout(() => {
              setShowPopup(true);
            }, 1000);
            return () => clearTimeout(timer);
          }, []);

          const handleClose = () => {
            setShowPopup(false);
          };

          const handleAskGrantbot = () => {
            // Add your Grantbot logic here
            console.log('Ask Grantbot clicked');
            setShowPopup(false);
          };

          return (
            <Modal isOpen={showPopup} onClose={handleClose}>
              <div className="text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-global-5 to-red-600 rounded-full mb-6"
                >
                  <span className="text-3xl text-white">🤖</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-poppins font-bold text-global-4 mb-4"
                >
                  Find the top 3 Right Grants in 60 Secs?
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-poppins text-global-6 mb-8"
                >
                  Get personalized grant recommendations instantly with our AI-powered Grantbot
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <a href="https://grantsbot.myprobuddy.com/" rel="noopener noreferrer"> 
                  <Button
                    onClick={handleAskGrantbot}
                    className="w-full bg-gradient-to-r from-global-5 to-red-600 text-white font-poppins font-bold py-4 px-8 rounded-xl text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                  >
                    Ask Grantbot
                  </Button> </a>
                  
                  <button
                    onClick={handleClose}
                    className="w-full text-global-6 font-poppins font-medium py-2 hover:text-global-4 transition-colors"
                  >
                    Maybe later
                  </button>
                </motion.div>
              </div>
            </Modal>
          );
        };

        export default GrantbotPopup;
