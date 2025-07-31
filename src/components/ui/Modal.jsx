import React from 'react';
        import { motion, AnimatePresence } from 'framer-motion';
        

        const Modal = ({ isOpen, onClose, children }) => {
          return (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {children}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          );
        };

        export default Modal;