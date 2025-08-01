import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const ContactForm = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwitN2SZNnZZowwPvrt8zRwjbF9bSDpwokqsyVC6JHtG_eIBOrmgQijjyVG6IAIEWdu/exec";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentDate = new Date().toLocaleDateString("en-GB");

    const formPayload = new FormData();
    formPayload.append("Date", currentDate);
    formPayload.append("First Name", formData.firstName);
    formPayload.append("Last Name", formData.lastName);
    formPayload.append("Email", formData.email);
    formPayload.append("Phone Number", formData.phone);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formPayload,
      });
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="relative lg:pt-16"
    >
      {/* Background Decorations */}
      <div className="absolute -top-8 -right-8 w-72 h-56 ">
        <img
          src="/images/img_link_scribble_2.png"
          alt="Decorative scribble"
          className="w-full h-full object-contain"
        />
      </div>
     <div className="absolute -bottom-10 -right-8 w-52 h-36">
  <img
    src="/images/img_scribble_1_design.png"
    alt="Decorative design"
    className="w-full h-full object-contain"
  />
</div>


      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 backdrop-blur-sm max-w-md mx-auto">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-poppins font-bold text-[#5f248e] mb-2">
                Talk to our Experts
              </h3>
              <p className="text-xl font-poppins text-global-6">
                Know the right grants for <span className="font-bold text-[#ef3e25]">FREE</span>
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-base font-poppins font-semibold text-global-4 mb-2">
                    Name
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-lg border border-gray-200 px-4 text-base bg-gray-50 focus:bg-white focus:border-[#5f248e]"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 rounded-lg border border-gray-200 px-4 text-base bg-gray-50 focus:bg-white focus:border-[#5f248e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-poppins font-semibold text-global-4 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-lg border border-gray-200 px-4 text-base bg-gray-50 focus:bg-white focus:border-[#5f248e]"
                  />
                </div>

                <div>
                  <label className="block text-base font-poppins font-semibold text-global-4 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-lg border border-gray-200 px-4 text-base bg-gray-50 focus:bg-white focus:border-[#5f248e]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#ef3e25] text-white font-poppins font-bold py-3 rounded-xl text-base mt-2 hover:bg-[#d32f13] transition-all duration-300 shadow-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                <div className="text-left text-xs text-global-6 leading-relaxed mt-2">
                  By scheduling the call, you agree with our <a href="#" className="text-global-15 underline hover:text-[#ef3e25]">Privacy Policy</a> & <a href="#" className="text-global-15 underline hover:text-[#ef3e25]">Terms of conditions</a>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-10">
               
            <h3 className="text-3xl font-poppins font-bold text-green-700">
              Thanks for submitting the form!
            </h3>
            <p className="text-lg text-global-6">
              Join our WhatsApp channel for daily updates on grants.
            </p>
            <br />
            <a
              href="https://whatsapp.com/channel/0029VabP5ALCnA7zIjGd2w3x"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-[#ef3e25] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-colors duration-300">
  Join WhatsApp Channel
</Button>

            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
