import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseStyleHeader = `fixed top-0 left-0 w-full z-50 ${className} transition-colors dutaion-300`;
  const headerClasses = clsx(baseStyleHeader, {
    'bg-yellow-500 shadow-md': isScrolled,
    'bg-red-500': !isScrolled,
  });
  return <header className={headerClasses}>{children}</header>;
};

export default Header;
