import React from 'react';

const Button = ({ children, className }) => {
  return (
    <button className={`${className} bg-primary text-white px-6 py-3 rounded-md`}>
      {children}
    </button>
  );
};

export default Button;
