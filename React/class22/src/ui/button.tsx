import React from 'react';
import clsx from 'clsx';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  // Base classes with built-in responsive sizing
  const baseClasses = `
    font-medium rounded-lg transition-all duration-200 
    focus:outline-none focus:ring-2 disabled:opacity-50
    px-3 py-2 text-sm
    sm:px-4 sm:py-2.5 sm:text-base
    md:px-6 md:py-3 md:text-lg
  `;

  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-300',
    secondary:
      'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-300',
  };

  const buttonClasses = clsx(baseClasses, variantClasses[variant], className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
