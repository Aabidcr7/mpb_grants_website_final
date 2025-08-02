import React, { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';


const TermsAndConditions = () => {
  return (
    <section className="w-full relative overflow-hidden" >
      <Header />
      <div className="min-h-screen bg-white px-4 sm:px-8 py-12 max-w-7xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h1
        className="text-[40px] sm:text-[56px] font-poppins font-medium mb-6 text-center"
        style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#fc5109' }}
       
      >
        Terms and Conditions
      </h1>
      <p className="text-[22px] font-poppins font-semibold text-black mb-8 leading-tight" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
        Please read these terms and conditions carefully before using our website.
      </p>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          1. Acceptance of Terms
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          Your access to and use of this website, as well as any services provided by MyProBuddy, are conditioned upon your acceptance and compliance with these terms and conditions. By accessing this website and using our services, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website or services.
        </p>
      </div>
      <div className="mb-8" >
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          2. User Responsibilities
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          You agree to use our website and services for lawful purposes only and to comply with all applicable laws, regulations, and guidelines. You further agree not to:
        </p>
        <ul className="list-disc ml-4 mb-2">
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Engage in any activity that may disrupt or interfere with the functionality or security of the website.</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Attempt to gain unauthorized access to any portion or feature of the website.</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Use the website to distribute malware, spam, or other malicious content.</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Impersonate any person or entity, or misrepresent your affiliation with a person or entity.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          3. Intellectual Property
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          All content and materials provided on this website, including but not limited to text, graphics, logos, images, audio clips, videos, data compilations, and software, are the property of MyProBuddy or its licensors and are protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, and non-transferable license to access and use the content and materials for personal and non-commercial purposes only.
        </p>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          You may not copy, reproduce, republish, upload, post, transmit, or distribute any content from this website without prior written permission from MyProBuddy.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          4. Limitation of Liability
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          MyProBuddy shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services, including but not limited to: Any errors or omissions in any content or materials. Any unauthorized access to or use of our servers and/or any personal information stored therein. Any interruption or cessation of transmission to or from our website. Any bugs, viruses, trojan horses, or similar issues transmitted through the website.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          5. Third-Party Links
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          Our website may contain links to third-party websites or services that are not owned or controlled by MyProBuddy. We are not responsible for the content, privacy policies, or practices of any third-party websites. Accessing any third-party sites is at your own risk, and we recommend reviewing their terms and conditions and privacy policies.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          6. Changes to the Terms
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes indicates your acceptance of the revised terms.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          7. Privacy Policy
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          Your use of the website is also governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using the website, you consent to the practices described in the Privacy Policy.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          8. Governing Law and Jurisdiction
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-[30px] font-poppins font-medium mb-2" style={{ letterSpacing: '-2px', fontFamily: 'Poppins', color: '#5d248f' }}>
          9. Payment and No Refund Policy
        </h2>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          All payments for services provided by MyProBuddy must be made in full as per the pricing and billing terms outlined at the time of purchase or engagement. By proceeding with payment, you confirm that:
        </p>
        <ul className="list-disc ml-4 mb-2">
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>You are authorized to use the chosen payment method.</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>All billing information provided is truthful and accurate.</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>You agree to pay all charges incurred by you or any users of your account and payment method.</li>
        </ul>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          <b>No Refunds:</b><br />
          All purchases and payments made to MyProBuddy are non-refundable, unless otherwise specified in a written agreement. This includes but is not limited to:
        </p>
        <ul className="list-disc ml-4 mb-2">
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Service fees</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Subscription or retainer payments</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Custom development or consulting fees</li>
          <li className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3" style={{ fontFamily: 'Poppins', letterSpacing: '-0.5px' }}>Digital products or downloadable materials</li>
        </ul>
        <p className="text-[15px] sm:text-[14px] md:text-[16px] font-poppins font-medium text-global-3 mb-2 text-justify" style={{ fontFamily: 'Poppins', letterSpacing: '-1px' }}>
          We encourage clients to review all service details, deliverables, and timelines carefully before proceeding with any transaction. If you have any issues or concerns regarding our services, you may contact our support team, and we will make reasonable efforts to address your concerns.
        </p>
      </div>
        <div className="text-[18px] font-poppins text-black mt-10" style={{ fontFamily: 'Poppins' }}>
          These Terms and Conditions were last updated on May 06, 2025.
        </div>
      </div>
      <div className="h-10 sm:h-16 lg:h-24" />
     
    </section>
  );
};

export default TermsAndConditions;
