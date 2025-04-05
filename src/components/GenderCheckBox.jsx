import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-2 items-center">
      {/* Male Option */}
     
        <input
          type="checkbox"
          checked={selectedGender === 'male'}
          onChange={() => onCheckboxChange('male')}
          className="form-checkbox w-5 h-5 text-red-600"
        />
        <span>Male</span>
      

      {/* Female Option */}
     
        <input
          type="checkbox"
          checked={selectedGender === 'female'}
          onChange={() => onCheckboxChange('female')}
          className="form-checkbox w-5 h-5 text-red-600"
        />
        <span>Female</span>
      
    </div>
  );
};

export default GenderCheckbox;
