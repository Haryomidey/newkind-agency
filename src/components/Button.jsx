import React from 'react';

const Button = ({ children, className, disabled }) => {
  return (
    <button className={`${className} bg-primary hover:bg-[#5048ec9d] ease duration-300 transition-all text-white px-6 py-3 rounded-md`} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
