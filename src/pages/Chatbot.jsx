import React from "react";

const Chatbot = () => {
  return (
    <div className="chatbot-wrapper" style={{ background: '#111' }}>
      <iframe
        src="https://cdn.botpress.cloud/webchat/v2.4/shareable.html?configUrl=https://files.bpcontent.cloud/2025/05/04/14/20250504142258-6ZH9NVNB.json"
        title="Chatbot"
        className="chatbot-frame"
        allow="microphone;"
      />
      <style>{`
        html, body {
          background: #111 !important;
        }
        .chatbot-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 2rem 1rem;
        }

        .chatbot-frame {
          border: none;
          width: 100%;
          max-width: 420px;
          height: 525px;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .chatbot-frame {
            max-width: 640px; /* wider for tablets */
            height: 723px;
          }
        }

        @media (min-width: 1024px) {
          .chatbot-frame {
            max-width: 100%;
            width: 100%;
            height: 723px;
          }
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
