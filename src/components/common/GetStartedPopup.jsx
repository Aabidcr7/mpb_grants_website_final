import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const GetStartedPopup = ({ onClose }) => {
  const scriptURL = "https://script.google.com/macros/s/AKfycbwitN2SZNnZZowwPvrt8zRwjbF9bSDpwokqsyVC6JHtG_eIBOrmgQijjyVG6IAIEWdu/exec";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const date = new Date().toLocaleDateString();

    const data = new FormData();
    data.append("Date", date);
    data.append("First Name", formData.firstName);
    data.append("Last Name", formData.lastName);
    data.append("Email", formData.email);
    data.append("Phone Number", formData.phone);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: data,
      });

      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });

    } catch (error) {
      console.error("Form submission error:", error.message);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg mx-auto px-2 sm:px-0"
        onClick={e => e.stopPropagation()}
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative lg:pt-16"
        >
          <div className="relative bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 backdrop-blur-sm">
            <button
              type="button"
              className="absolute top-3 right-3 z-20 text-global-6 bg-white rounded-full p-2 shadow"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
              onClick={e => {
                e.stopPropagation();
                onClose();
              }}
              aria-label="Close"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /></svg>
            </button>

            {!submitted ? (
              <>
                <div className="text-center mb-10">
                  <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-global-4 mb-3">
                    Work with our Experts
                  </h3>
                  <p className="text-xl font-poppins text-global-6">
                    Fill the Details Below
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-base font-poppins font-semibold text-global-4 mb-3">
                      Full Name *
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <EditText
                        name="firstName"
                        placeholder="First Name"
                        className="h-14"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <EditText
                        name="lastName"
                        placeholder="Last Name"
                        className="h-14"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-poppins font-semibold text-global-4 mb-3">
                      Email Address *
                    </label>
                    <EditText
                      name="email"
                      placeholder="your.email@example.com"
                      className="h-14"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-base font-poppins font-semibold text-global-4 mb-3">
                      Phone Number *
                    </label>
                    <EditText
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="h-14"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-global-5 to-red-600 text-white font-poppins font-bold py-4 px-8 rounded-xl text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-600 mb-3">
                  Thanks for submitting the form!
                </h3>
                <p className="text-global-6 text-lg">
                  Our experts will be in touch with you shortly.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedPopup;
