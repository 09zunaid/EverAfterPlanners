import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, to, variant = 'primary', className = '', ...props }) => {
  const baseClass = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
