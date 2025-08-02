import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import ContactForm from '../../components/common/ContactForm';
import GetStartedPopup from '../../components/common/GetStartedPopup';
import GrantbotPopup from '../../components/common/GrantbotPopup';
import TestimonialCarousel from '../../components/common/TestimonialCarousel';

// Custom hook for scroll animations
const useScrollAnimation = (animationType = 'fadeUp') => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    slideDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, animations: animations[animationType] };
};

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [currentWord, setCurrentWord] = useState('Business');

  // Word changing animation
  useEffect(() => {
    const words = ['Business', 'Startup'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  };

  const faqData = [
    "What is the process to attain Grant?",
    "What is the range of the Grant Amount?",
    "Do I have to pay MyProBuddy?",
    "What do I get in the comprehensive Grant report?",
    "What does the venture advisor do?"
  ];

  // featured logos
  const logos = [
    { src: "/images/img_item_link_moe_logo.png", alt: "MOE Logo", className: "h-16 lg:h-20 w-auto" },
    { src: "/images/img_item_link_without_year_04.png", alt: "Partner logo", className: "h-16 lg:h-20 w-auto" },
    { src: "/images/img_item_link_i.png", alt: "Partner logo", className: "h-24 lg:h-28 w-auto" },
    { src: "/images/img_item_link.png", alt: "Partner logo", className: "h-24 lg:h-28 w-auto" },
    { src: "/images/img_item_passion_vista.png", alt: "Partner logo", className: "h-16 lg:h-20 w-auto" },
    { src: "/images/1.png", alt: "Partner logo", className: "h-24 lg:h-28 w-auto" },
    { src: "/images/27.png", alt: "Partner logo", className: "h-16 lg:h-20 w-auto" },
    { src: "/images/img_item_your_story.png", alt: "Partner logo", className: "h-16 lg:h-20 w-auto" },
    // ...other logos or repeat as needed
  ];

  // grantslogos
  const grantLogos = [
    { src: "/images/img_i9qywlsc1b6ywjus17ywnvsm4_jpg.png", alt: "Grant scheme" },
    { src: "/images/img_am4wbqthohuokc0fmvkxcdfmy_jpg.png", alt: "Grant scheme" },
    { src: "/images/img_vpudovuxqmvmycb.png", alt: "Grant scheme" },
    { src: "/images/img_modsstcewvtn140.png", alt: "Grant scheme" },
    { src: "/images/img_ujv2ixvaalmlltn.png", alt: "Grant scheme" },
    { src: "/images/img_rp2fgvldibgle4w.png", alt: "Grant scheme" },
    { src: "/images/img_rtnty8peqikugny.png", alt: "Grant scheme" },
    { src: "/images/img_re8cxq8ouw6jeyl.png", alt: "Grant scheme" },
    { src: "/images/8.png", alt: "Grant scheme" },
    { src: "/images/9.png", alt: "Grant scheme" },
    { src: "/images/10.png", alt: "Grant scheme" },
    { src: "/images/11.png", alt: "Grant scheme" }
    // ...add more as needed
  ];

  // reward logos 

  const rewardeeLogos = [
    { src: "/images/img_item_kexc1m12.png", alt: "Rewardee" },
    { src: "/images/img_item_a1qfpgpi.png", alt: "Rewardee" },
    { src: "/images/img_item_v2xwr24c.png", alt: "Rewardee" },
    { src: "/images/img_item_6rkxlbzq.png", alt: "Rewardee" },
    { src: "/images/img_item_agdev3xy.png", alt: "Rewardee" },
    { src: "/images/img_item_ib9hg9ql.png", alt: "Rewardee" },
    { src: "/images/img_item_dm74iivy.png", alt: "Rewardee" },
    { src: "/images/img_item_xfw88mvd.png", alt: "Rewardee" },
    { src: "/images/img_item_x7mjecan_84x112.png", alt: "Rewardee" }
  ];
  

  const blogPosts = [
    {
      id: 1,
      title: "Fuel Your Startup: Explore Grant & Funding Opportunities Live - June",
      description: "Your guide to navigating live grants, funding programs, and resources tailored for early-stage founders.",
      author: "Aabid Ibrahim S",
      publishDate: "9 Jun 2025",
      image: "/images/img_image_sszba6g.png"
    },
    {
      id: 2,
      title: "Fuel Your Startup: Explore Grant & Funding Opportunities Live - June",
      description: "Your guide to navigating live grants, funding programs, and resources tailored for early-stage founders.",
      author: "Aabid Ibrahim S",
      publishDate: "2 Jun 2025",
      image: "/images/img_image_zvxsfls.png"
    },
    {
      id: 3,
      title: "Fuel Your Startup: Explore Grant & Funding Opportunities Live - May",
      description: "Your guide to navigating live grants, funding programs, and resources tailored for early-stage founders.",
      author: "Aabid Ibrahim S",
      publishDate: "26 May 2025",
      image: "/images/img_image_k8ipkyw.png"
    }
  ];

  // Animation refs for different sections
  const heroAnimation = useScrollAnimation('fadeUp');
  const connectAnimation = useScrollAnimation('fadeLeft');
  const featuredAnimation = useScrollAnimation('scale');
  const exploreAnimation = useScrollAnimation('slideDown');
  const templateAnimation = useScrollAnimation('fadeRight');
  const rewardeesAnimation = useScrollAnimation('fadeUp');
  const reportAnimation = useScrollAnimation('scale');
  const updatesAnimation = useScrollAnimation('fadeLeft');
  const statsAnimation = useScrollAnimation('fadeUp');
  const testimonialsAnimation = useScrollAnimation('fadeRight');
  const faqAnimation = useScrollAnimation('fadeUp');
  const socialAnimation = useScrollAnimation('scale');
  const blogAnimation = useScrollAnimation('fadeLeft');
  const ctaAnimation = useScrollAnimation('slideDown');

  const [showGetStarted, setShowGetStarted] = useState(false);
  return (
    <div className="w-full">
      <GrantbotPopup />
      {showGetStarted && <GetStartedPopup onClose={() => setShowGetStarted(false)} />}

      {/* Hero Section - Redesigned */}
    <motion.section
  ref={heroAnimation.ref}
  initial="hidden"
  animate={heroAnimation.controls}
  variants={heroAnimation.animations}
  transition={{ duration: 0.8 }}
  className="relative w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-orange-50 overflow-hidden"
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
    <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 pt-4 sm:pt-8 text-center lg:text-left items-center lg:items-start flex flex-col"
      >
        {/* Update Badge */}
        <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-8 shadow-md"
>
  <span className="bg-global-5 text-white text-xs font-semibold px-3 py-1 rounded-full">
    UPDATE
  </span>
  <span className="text-global-4 text-xs font-medium">
    205 Grants and Schemes are currently active
  </span>
  <img
    src="/images/img_arrow_right.svg"
    alt="Arrow"
    className="w-3 h-3 opacity-70"
  />
</motion.div>


        {/* Main Heading */}
        <div className="mb-2 sm:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-medium leading-[0.9] text-global-4 mb-6 tracking-[-3px]"
          >
            Know the top<br />
            Grants for your <br />
            <span className="text-global-15">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-global-15 to-orange-600 bg-clip-text text-global-15"
              >
                {currentWord}
              </motion.span>
            </span>
          </motion.h1>

            <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mb-4 sm:mb-8"
        >
          <div className="flex items-center gap-6 mb-4 justify-center lg:justify-start">
            <div className="flex flex-row justify-center items-center">
              <img
                src="/images/4.png"
                alt="User Avatar 1"
                className="w-[38px] h-[38px] rounded-[18px] border-2 border-white"
              />
              <img
                src="/images/15.png"
                alt="User Avatar 2"
                className="w-[38px] h-[38px] rounded-[18px] border-2 border-white -ml-2"
              />
              <img
                src="/images/6.png"
                alt="User Avatar 3"
                className="w-[38px] h-[38px] rounded-[18px] border-2 border-white -ml-2"
              />
              <img
                src="/images/7.png"
                alt="User Avatar 4"
                className="w-[38px] h-[38px] rounded-[18px] border-2 border-white -ml-2"
              />
            </div>

            <div className="flex items-center gap-2">
              <img
                src="/images/img_stars.svg"
                alt="5 star rating"
                className="w-28 h-6"
              />
              <span className="text-lg font-poppins font-semibold text-global-4">(4.9)</span>
            </div>
          </div>
          <p className="text-xl font-poppins font-medium text-global-6 italic">
            Trusted by 17,000+ happy entrepreneurs
          </p>
        </motion.div>
        </div>

        {/* Customer Social Proof */}
      
      </motion.div>

      {/* Right Form */}
      <ContactForm />
    </div>
  </div>
</motion.section>


   {/* Featured In Section */}
   <section className="bg-white py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-center text-global-2 mb-12">
          As Featured In
        </h2>
        <div className="marquee">
          <div className="marquee-track">
            {logos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} className={logo.className} />
            ))}
            {logos.map((logo, idx) => (
              <img key={logos.length + idx} src={logo.src} alt={logo.alt} className={logo.className} />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
          }
          .marquee-track {
            display: flex;
            width: max-content;
            gap: 34px;
            animation: marquee 30s linear infinite;
          }
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
      {/* Connect and Collaborate Section - Redesigned */}
      <motion.section
        ref={connectAnimation.ref}
        initial="hidden"
        animate={connectAnimation.controls}
        variants={connectAnimation.animations}
        transition={{ duration: 0.8 }}
        className="relative bg-white py-24 lg:py-32 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8">
              <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-global-4 tracking-tight">
                Connect
              </h2>
              <div className="relative flex items-center justify-center">
                {/* Background speech bubble */}
               
                {/* Main speech bubble with video camera */}
                <div className="relative w-20 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-poppins font-bold text-global-4 tracking-tight">
                and Collaborate
              </h2>
            </div>
            <h3 className="text-4xl lg:text-6xl font-poppins font-bold text-global-4 mb-12 tracking-tight">
              With our <span className="text-global-15">Experts</span>
            </h3>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-base sm:text-xl font-poppins text-global-6 leading-relaxed mb-8">
                Join forces with our experienced grant specialists and turn your business ideas into funded realities through personalized guidance and expert insights.
              </p>
              <Button
                className="bg-gradient-to-r from-global-2 to-purple-700 text-white font-poppins font-bold px-10 py-4 rounded-2xl text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-xl"
                onClick={() => setShowGetStarted(true)}
              >
                Work with our Expert Team →
              </Button>
            </div>
          </motion.div>
          
          {/* Interface Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative">
              <img 
                src="/images/2.jpg" 
                alt="Expert collaboration interface" 
                className="w-full h-auto rounded-3xl shadow-2xl border border-gray-200"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 left-0 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-lg animate-bounce overflow-hidden"></div>
            <div className="absolute -bottom-8 right-0 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full shadow-lg animate-pulse overflow-hidden"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured In Section */}
      <motion.section
  ref={exploreAnimation.ref}
  initial="hidden"
  animate={exploreAnimation.controls}
  variants={exploreAnimation.animations}
  transition={{ duration: 0.8 }}
  className="bg-global-2 py-10 lg:py-16"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl lg:text-4xl font-poppins font-semibold text-center text-white mb-16"
    >
      Explore the Top Grants and Schemes for your idea
    </motion.h2>

    <div className="marquee">
      <div className="marquee-track">
        {/* One set of images */}
        {grantLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="h-24 lg:h-32 w-auto max-w-[170px] object-contain hover:scale-110 transition-transform"
          />
        ))}
        {/* Duplicate set for seamless effect */}
        {grantLogos.map((logo, idx) => (
          <img
            key={grantLogos.length + idx}
            src={logo.src}
            alt={logo.alt}
            className="h-24 lg:h-32 w-auto max-w-[170px] object-contain hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </div>
  </div>

  <style>
    {`
      .marquee {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }
      .marquee-track {
        display: flex;
        width: max-content;
        gap: 34px;
        animation: marquee 35s linear infinite;
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `}
  </style>
</motion.section>





      {/* Explore Grants Section */}
      

      {/* Grant Proposal Template Section - Background Image Removed */}
      <motion.section
        ref={templateAnimation.ref}
        initial="hidden"
        animate={templateAnimation.controls}
        variants={templateAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8 text-center lg:text-left">
                <h2
                  className="text-3xl lg:text-4xl font-poppins font-semibold text-global-1 mb-4"
                  style={{ letterSpacing: '-0.5px' }}
                >
                  Make use of our Grant Proposal Template 
                  <span className="text-global-15"> (GPT)  </span> to effectively convey your idea. 🚀
                </h2>

                <p className="text-base sm:text-xl font-poppins text-global-6 leading-relaxed mb-8 mx-auto lg:mx-0" style={{ letterSpacing: '-0.5px', maxWidth: '32rem' }}>
                  Say farewell to the complexities of raising funds and 
                  unlock a smoother path to success. Empowering you 
                  with real results
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <a href="/chatbot" rel="noopener noreferrer"> 
                <Button className="bg-global-5 text-white font-poppins font-semibold px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
                  Talk to our AI Agent
                </Button></a>
              </div>
            </motion.div>
           <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="order-1 lg:order-2 flex justify-center"
>
  <img 
    src="/images/12.png" 
    alt="Comprehensive grant template" 
    className="w-2/3 md:w-1/2 lg:w-[400px] h-auto rounded-3xl shadow-2xl"
  />
</motion.div>

          </div>
        </div>
      </motion.section>

      {/* Grant Rewardees Section */}
      <motion.section
  ref={rewardeesAnimation.ref}
  initial="hidden"
  animate={rewardeesAnimation.controls}
  variants={rewardeesAnimation.animations}
  transition={{ duration: 0.8 }}
  className="bg-global-2 py-16"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl lg:text-4xl font-poppins font-bold text-center text-white mb-12"
    >
      Learn more about the Grant Rewardees
    </motion.h2>
    <div className="marquee">
      <div className="marquee-track">
        {rewardeeLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-transform"
          />
        ))}
        {rewardeeLogos.map((logo, idx) => (
          <img
            key={rewardeeLogos.length + idx}
            src={logo.src}
            alt={logo.alt}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain hover:scale-110 transition-transform"
          />
        ))}
      </div>
    </div>
  </div>
  <style>
    {`
      .marquee {
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }
      .marquee-track {
        display: flex;
        width: max-content;
        gap: 34px;
        animation: marquee 4s linear infinite;
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .marquee-track:hover {
        animation-play-state: paused;
      }
    `}
  </style>
</motion.section>


      {/* Comprehensive Grant Report Section - Background Image Removed */}
      <motion.section
        ref={reportAnimation.ref}
        initial="hidden"
        animate={reportAnimation.controls}
        variants={reportAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-poppins font-semibold text-global-11 leading-tight">
              Unlock your full potential with <br />
              our comprehensive grant report
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <img 
              src="/images/13.png" 
              alt="Grant report details" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Daily Updates Section - Redesigned */}
      <motion.section
        ref={updatesAnimation.ref}
        initial="hidden"
        animate={updatesAnimation.controls}
        variants={updatesAnimation.animations}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" rounded-3xl overflow-hidden shadow-2xl"  style={{ backgroundColor: '#371257' }}
          >
            <div className="relative p-12 lg:p-16 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            

              <div className="relative z-10">
                {/* Modern Mobile Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-8"
                >
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="6" width="28" height="36" rx="6" fill="#fff" fillOpacity="0.12" stroke="#fff" strokeWidth="2"/>
                    <rect x="18" y="36" width="12" height="4" rx="2" fill="#fff" fillOpacity="0.5"/>
                    <circle cx="24" cy="40" r="1.5" fill="#fff"/>
                  </svg>
                </motion.div>

                <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-white leading-tight mb-6">
                  Get Free Daily Updates<br />
                  On Top <span className="bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">Grants</span>
                </h2>
                
                <p className="text-xl lg:text-2xl font-poppins text-white/90 mb-4 italic">
                  Stay informed, stay funded.
                </p>
                
               
                
                <div className="space-y-4">
                  <a href="https://whatsapp.com/channel/0029VabP5ALCnA7zIjGd2w3x" rel="noopener noreferrer"> 
                  <Button className="bg-gradient-to-r from-global-5 to-red-600 text-white font-poppins font-bold px-10 py-4 rounded-2xl text-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-xl border-2 border-white/20">
                    🚀 Join Our WhatsApp Channel
                  </Button> </a>
                  
                  <div className="flex items-center justify-center gap-8 text-white/80 text-sm font-poppins">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Free Forever</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>Daily Updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>200+ Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        ref={statsAnimation.ref}
        initial="hidden"
        animate={statsAnimation.controls}
        variants={statsAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-global-6 py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <h2 className="text-4xl lg:text-6xl font-poppins font-medium text-global-4">
    You can bet on us
  </h2>
</motion.div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
>
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="text-center"
  >
    <h3
      className="text-[48px] font-be-vietnam font-medium text-global-15 mb-2 whitespace-nowrap"
      style={{ letterSpacing: '-3px' }}
    >
      60L
    </h3>
    <p className="text-lg lg:text-xl font-poppins font-semibold text-global-9">
      Avg Grant Size
    </p>
  </motion.div>

  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="text-center"
  >
    <h3
      className="text-[48px] font-be-vietnam font-medium text-global-15 mb-2 whitespace-nowrap"
      style={{ letterSpacing: '-3px' }}
    >
      91%
    </h3>
    <p className="text-lg lg:text-xl font-poppins font-semibold text-global-9">
      Grant match success rate
    </p>
  </motion.div>
           <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-center"
  >
    <h3
      className="text-[48px] font-be-vietnam font-medium text-global-15 mb-2 whitespace-nowrap"
      style={{ letterSpacing: '-3px' }}
    >
                17,000+
              </h3>
              <p className="text-lg lg:text-xl font-poppins font-semibold text-global-9">
                Questions Answered
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
           <h3
  className="text-[48px] font-be-vietnam font-medium text-global-15 mb-2 whitespace-nowrap"
  style={{ letterSpacing: '-3px' }}
>
  Every 10 mins
</h3>

              <p className="text-lg lg:text-xl font-poppins font-semibold text-global-9">
                Someone is on call with us
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section - Redesigned with Carousel */}
      <motion.section
        ref={testimonialsAnimation.ref}
        initial="hidden"
        animate={testimonialsAnimation.controls}
        variants={testimonialsAnimation.animations}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-global-6 to-white py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-poppins font-medium leading-tight mb-8 text-global-4"
              style={{ letterSpacing: '-2px' }}
            >
              <span className="block" style={{ color: '#ef3e25' }}>Real Stories.</span>
              <span className="block" style={{ color: '#111' }}>Don't take our word for it.</span>
            </motion.h2>
            
           <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="text-base sm:text-xl font-poppins text-global-6 leading-relaxed mb-8 max-w-[700px] mx-auto"
>
  Discover how thousands of entrepreneurs have transformed their businesses with our grant expertise and personalized guidance.
</motion.p>

          </div>
          
          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TestimonialCarousel />
          </motion.div>
       
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqAnimation.ref}
        initial="hidden"
        animate={faqAnimation.controls}
        variants={faqAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 lg:py-32"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >

             <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-poppins font-medium leading-tight mb-8 text-global-4"
              style={{ letterSpacing: '-2px' }}
            >
              <span className="block" style={{ color: '#ef3e25' }}>Still not convinced?<br /></span>
              <span className="block" style={{ color: '#111' }}>We have got the answers</span>
            </motion.h2>
          

          </motion.div>
          
       <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="space-y-6"
>
  {faqData.map((question, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`border-b border-gray-200 pb-6 ${selectedFaq === index ? 'bg-global-6 rounded-2xl p-6 -mb-6' : ''}`}
    >
      <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
        <p className="text-lg font-be-vietnam font-medium text-global-4 pr-4">
          {question}
        </p>
        <button className="flex-shrink-0">
          <img 
            src="/images/img_plus.png" 
            alt="Toggle FAQ" 
            className={`w-5 h-5 transition-transform ${selectedFaq === index ? 'rotate-45' : ''}`}
          />
        </button>
      </div>
      {selectedFaq === index && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 text-global-6 font-be-vietnam space-y-3"
        >
          {index === 0 && (
            <>
              <p><strong>1. Identifying Suitable Grants:</strong> The initial step of the grant process involves identifying suitable grant opportunities that align with the goals, objectives, and mission of the applicant. This involves conducting thorough research to locate potential grants from government agencies, foundations, corporations, or other funding organizations.</p>
              <p><strong>2. Developing a Strong Proposal:</strong> Once suitable grants have been identified, the next step is to develop a compelling grant proposal. This document typically includes an introduction to the applicant, a statement of need, a detailed description of the project or initiative, a budget breakdown, and a plan for evaluating the project's success.</p>
              <p><strong>3. Submitting the Application:</strong> The completed grant proposal must be submitted to the funding organization or agency before the specified deadline. This may involve submitting the application online, through the mail, or through other designated channels.</p>
              <p><strong>4. Undergoing Review:</strong> After the grant application has been submitted, it undergoes a review process conducted by a panel of experts or a grant review committee. The reviewers assess the proposal's merit, feasibility, and potential impact.</p>
              <p><strong>5. Receiving Notification of the Decision:</strong> Once the review process is complete, the applicant is notified of the funding decision. This may include receiving a grant award or being placed on a waitlist.</p>
              <p><strong>6. Negotiating and Signing a Grant Agreement:</strong> If the grant is awarded, the applicant and the funding organization engage in negotiations to finalize the terms and conditions of the grant agreement. This agreement outlines the specific requirements, deliverables, and reporting obligations associated with the grant.</p>
              <p><strong>7. Providing Regular Grant Progress Reports:</strong> Throughout the grant period, the recipient is required to submit regular progress reports to the funding organization. These reports provide updates on the project's status, accomplishments, and any challenges encountered. They serve to ensure that the grant is being utilized effectively and in accordance with the agreed-upon terms.</p>
              <p><strong>8. Maintaining Compliance and Accountability:</strong> The grant recipient must maintain compliance with all applicable laws, regulations, and reporting requirements throughout the grant period. This includes adhering to financial and ethical standards and ensuring that the project is conducted ethically and responsibly.</p>
              <p><strong>9. Grant Closeout:</strong> At the conclusion of the grant period, the recipient is required to submit a final report summarizing the project's outcomes and achievements. This report serves as a valuable resource for the funding organization in assessing the impact of the grant and evaluating future funding decisions.</p>
            </>
          )}
          {index === 1 && (
            <p>The grant size ranges from 1 lakh to 7 crores, depending on factors like the business sector that the business idea/startup is in, the granting agency, type of grant, project scope, and geographic location.</p>
          )}
          {index === 2 && (
            <>
              <p>There's no charge for our experts to give you advice and help you build a strong case for the grant.</p>
              <p>If you want to get your hands on the comprehensive grant report, it'll cost you a small fee of 2,499 rupees.</p>
            </>
          )}
          {index === 3 && (
            <p>It's a guide to the top 5 grants that are a perfect match for your venture's goals. We've picked the best ones and given you the lowdown on their average deal sizes, application process, and documents you need to include. Plus, we've got their contact details so you can reach out directly.</p>
          )}
          {index === 4 && (
            <>
              <p>Our venture advisors can assist you with a variety of tasks, including:</p>
              <ul className="list-disc pl-5">
                <li>Business planning</li>
                <li>Product development</li>
                <li>Marketing and sales</li>
                <li>Fundraising (Grants/ Equity-based fundraising from VCs and Angel Investors)</li>
                <li>Exit strategies</li>
              </ul>
              <p>We can also provide mentorship and support to your team, and help you to develop a network of advisors, investors, and other resources.</p>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  ))}

  <div className="text-center pt-8">
    <p className="text-lg font-be-vietnam font-medium text-global-4">
      Still have more questions? Contact us on <span className="text-global-16"> <a href="https://api.whatsapp.com/send/?phone=%2B919952237700&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Whatsapp </a></span>.
    </p> 
  </div>
</motion.div>

        </div>
      </motion.section>

      {/* Social Media Section - Redesigned */}
      <motion.section
        ref={socialAnimation.ref}
        initial="hidden"
        animate={socialAnimation.controls}
        variants={socialAnimation.animations}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-24 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white border border-purple-200 rounded-full px-6 py-2 mb-6 shadow-sm">
              <span className="text-global-4 font-poppins font-semibold">Stay Connected</span>
            </div>
            
          <h2
  className="text-3xl lg:text-5xl font-poppins text-global-4 leading-tight mb-6"
  style={{
    fontWeight: 600, // SemiBold
    letterSpacing: "-1.5px"
  }}
>

              Follow our socials for regular updates
            </h2>
            
           <p className="text-base sm:text-xl font-poppins text-global-6 leading-relaxed mb-8 max-w-[700px] mx-auto">
              Stay ahead of the funding game with daily insights, success stories, and exclusive grant opportunities.
            </p>
          </motion.div>
          
       <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto"
>
  {/* LinkedIn Card */}
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1 }}
    className="group p-8 border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="flex flex-col items-center text-center">
      <img
        src="/images/ld.png" // Replace with correct path or use a public URL
        alt="LinkedIn"
        className="w-10 h-10 mb-4"
      />

      <h3
        className="text-2xl font-poppins text-global-4 mb-3"
        style={{ fontWeight: 600, letterSpacing: "-1.5px" }}
      >
        LinkedIn
      </h3>

      <p className="text-global-6 font-poppins mb-6 leading-relaxed">
        Professional insights, industry updates, and networking opportunities
      </p>

      <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-poppins font-bold px-8 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 shadow-lg">
    <a href="https://www.linkedin.com/company/myprobuddy/" rel="noopener noreferrer">  Follow </a>
      </Button> 

      <div className="mt-4 flex items-center gap-2 text-sm text-global-6">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span>5K+ followers</span>
      </div>
    </div>
  </motion.div>

  {/* Instagram Card */}
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="group p-8 border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
  >
    <div className="flex flex-col items-center text-center">
      <img
        src="/images/ig.png" // Replace with correct path or use a public URL
        alt="Instagram"
        className="w-10 h-10 mb-4"
      />

      <h3
        className="text-2xl font-poppins text-global-4 mb-3"
        style={{ fontWeight: 600, letterSpacing: "-1.5px" }}
      >
        Instagram
      </h3>

     <p className="text-global-6 font-poppins mb-6 leading-relaxed">
  Founders’ fundraising stories, startup terminologies, and everything in between
</p>


      <Button className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-poppins font-bold px-8 py-3 rounded-2xl hover:from-pink-600 hover:via-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg">
       <a href="https://www.instagram.com/myprobuddy/" rel="noopener noreferrer">  Follow </a> 
      </Button>

      <div className="mt-4 flex items-center gap-2 text-sm text-global-6">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span>100+ followers</span>
      </div>
    </div>
  </motion.div>
</motion.div>


          
          {/* Additional Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-global-6"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span className="font-poppins">Daily Grant Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <span className="font-poppins">Expert Tips</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <span className="font-poppins">Success Stories</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        ref={blogAnimation.ref}
        initial="hidden"
        animate={blogAnimation.controls}
        variants={blogAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-white py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
             <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl lg:text-6xl font-poppins font-medium leading-tight mb-8 text-global-4"
              style={{ letterSpacing: '-2px' }}
            >
              <span className="block" style={{ color: '#ef3e25' }}> Latest Blogs</span>
            </motion.h2>
          
            <h2 className="text-3xl lg:text-5xl font-poppins font-medium text-global-15 mb-4">
             
            </h2>
            <p className="text-base sm:text-xl font-poppins text-global-6 leading-relaxed mb-8 max-w-[700px] mx-auto">
              Explore insights, updates, and expert tips from our latest posts on business grants.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          > 
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-b from-orange-50 to-orange-50/40 border border-gray-200/20 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/newsletters/grants-spotlight-7321401877835730944/', '_blank')}
                tabIndex={0}
                onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.open('https://www.linkedin.com/newsletters/grants-spotlight-7321401877835730944/', '_blank'); }}
                role="button"
                aria-label={`Read more about ${post.title}`}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <div className="mb-6">
                  <h3 className="text-lg font-poppins font-medium text-global-5 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm font-poppins text-global-5 line-clamp-3">
                    {post.description}
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs font-poppins text-global-6 mb-1">
                      Written by
                    </p>
                    <div className="flex items-center gap-2">
                      <img 
                        src="/images/5.png" 
                        alt="Author avatar" 
                        className="w-6 h-6 rounded-full"
                      />
                      <p className="text-sm font-poppins text-global-5">
                        {post.author}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-poppins text-global-6 mb-1">
                      Published on
                    </p>
                    <p className="text-sm font-poppins text-global-5">
                      {post.publishDate}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        ref={ctaAnimation.ref}
        initial="hidden"
        animate={ctaAnimation.controls}
        variants={ctaAnimation.animations}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-global-2 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="p-8 lg:p-16"
              >
                <h2 className="text-3xl lg:text-5xl font-poppins font-medium text-white leading-tight mb-8">
                  Skyrocket your fund  goals with us.
                </h2>
             <Button
  variant="ghost"
  className="bg-[#ef3e25] text-white font-be-vietnam font-medium px-8 py-4 rounded-3xl shadow-lg hover:bg-[#ef3e25] transition-colors"     onClick={() => setShowGetStarted(true)}
>
  Start now
</Button>


              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative h-64 lg:h-full"
              >
                <img 
                  src="/images/img_mpb_fund_riasing.png" 
                  alt="Fund raising goals" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;