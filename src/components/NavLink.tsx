import React from 'react';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ href, isActive, children, onClick, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${className} transition-colors relative ${
        isActive
          ? 'text-black font-medium'
          : 'text-gray-700 hover:text-black'
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-full" />
      )}
    </a>
  );
}