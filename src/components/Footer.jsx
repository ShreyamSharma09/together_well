import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-white-200 flex flex-col relative">
      {/* Footer gradient layers */}
      <div className="w-full">
        <div className="w-full h-16 bg-[#FCE3EC]"></div>
        <div className="w-full h-16 bg-[#FAD2E1] relative">
          <img
            src="https://cms.mistral.ai/assets/920e56ee-25c5-439d-bd31-fbdf5c92c87f"
            alt="Centered Logo"
            className="w-54 h-54 object-contain absolute left-1/2 -top-8 transform -translate-x-1/2"
          />
        </div>
        <div className="w-full h-16 bg-[#F9F8FD]"></div>
        <div className="w-full h-16 bg-[#E0EAFC]"></div>
        <div className="w-full h-16 bg-[#D2DDFE]"></div>
        <div className="w-full h-16 bg-[#C3C8F7]"></div>
      </div>
    </div>
  );
};

export default Footer;