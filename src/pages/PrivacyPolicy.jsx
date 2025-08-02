import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const PrivacyPolicy = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <Header />
      <div className="min-h-screen bg-white px-4 sm:px-8 py-12 max-w-7xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1
          className="text-[40px] sm:text-[56px] font-poppins font-medium mb-6 text-center"
          style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#fc5109' }}
        >
          Privacy Policy
        </h1>
        <p className="text-[22px] font-poppins font-semibold text-black mb-8 leading-tight" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          Please read these Privacy Policies carefully before using our website.
        </p>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            1. Information Collection
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We may collect personal information from you when you use our website or services, including but not limited to your name, email address, phone number, postal address, IP address, and payment details. This information is collected through forms, account registrations, transactions, and other interactions with our platform.
          </p>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We use this information to:
          </p>
          <ul className="list-disc ml-4 mb-2">
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Deliver and manage our services.</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Communicate with you about your account or transactions.</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Send you important updates, marketing communications, and promotional offers (only if you have opted in).</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Improve, personalize, and optimize the user experience on our website.</li>
          </ul>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We are committed to protecting your privacy and will never sell, rent, distribute, or lease your personal information to third parties unless:
          </p>
          <ul className="list-disc ml-4 mb-2">
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>We have your permission.</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>It is required by law.</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>It is necessary to fulfill a legal obligation or enforce our Terms and Conditions.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            2. Data Security
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, loss, misuse, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc ml-4 mb-2">
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Secure server hosting and data encryption</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Role-based access control</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Regular data security assessments</li>
          </ul>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            Despite our efforts, no method of data transmission or storage is completely secure. You acknowledge and accept this risk when using our services.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            3. Cookies
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We may use cookies and similar tracking technologies (such as pixels and web beacons) to:
          </p>
          <ul className="list-disc ml-4 mb-2">
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Analyze website traffic and user interaction</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Store user preferences</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Enhance user experience</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Deliver relevant ads and marketing</li>
          </ul>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            You can control or disable cookies through your browser settings. However, please note that some features or services on our website may not function properly without cookies.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            4. Third-Party Links
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            Our website may contain links to third-party websites or services that are not owned or operated by MyProBuddy. We are not responsible for the content, privacy practices, or policies of such external websites. We strongly recommend that you review their privacy policies before engaging with them or providing any personal data.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            5. Data Retention
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws and regulations. Once the data is no longer needed, we securely delete or anonymize it.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            6. User Rights
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            You have the right to:
          </p>
          <ul className="list-disc  ml-4 mb-2">
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Access the personal data we hold about you</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Request correction of inaccurate or incomplete data</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Request deletion of your personal data (subject to applicable legal limitations)</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Withdraw consent at any time for processing based on consent</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Object to or restrict certain data processing activities</li>
            <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Request data portability (if applicable under local law)</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            7. Consent
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            By using our website, submitting information, or engaging with our services, you consent to the collection, use, and processing of your personal information as described in this Privacy Policy.
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
            8. Changes to this Privacy Policy
          </h2>
          <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
            We reserve the right to update or modify this Privacy Policy at any time. All changes will be posted on this page with an updated effective date. We encourage you to review this page periodically to stay informed of how we are protecting your information.
          </p>
        </div>
        <div className="text-[18px] font-poppins text-black mt-10" style={{ fontFamily: 'Poppins' }}>
          These Privacy Policies were last updated on May 06, 2025.
        </div>
      </div>
      <div className="h-10 sm:h-16 lg:h-24" />
 
    </section>
  );
};

export default PrivacyPolicy;
