import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Import page components
import HomePage from './pages/Home';
import Chatbot from './pages/Chatbot';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Pass a prop to Header to indicate if we're on the chatbot page */}
        <Routes>
          <Route path="/chatbot" element={
            <>
              <Header darkMode />
              <main className="flex-1"><Chatbot /></main>
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-1"><HomePage /></main>
            </>
          } />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRoutes;