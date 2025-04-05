import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-white-200 flex flex-col relative">
  {/* Footer-like gradient */}
  <div className="w-full">
    <div className="w-full h-16 bg-[#FF3333]"></div>

    {/* Container for overlapping image */}
    <div className="w-full h-16 bg-[#CC0000] relative">
      <img
        src="https://cms.mistral.ai/assets/920e56ee-25c5-439d-bd31-fbdf5c92c87f"
        alt="Centered Logo"
        className="w-54 h-54 object-contain absolute left-1/2 -top-8 transform -translate-x-1/2"
      />
    </div>

    <div className="w-full h-16 bg-[#990000]"></div>
    <div className="w-full h-16 bg-[#660000]"></div>
    <div className="w-full h-16 bg-[#330000]"></div>
    <div className="w-full h-16 bg-[#000000]"></div>
  </div>
</div>

  );
};

export default Footer;
