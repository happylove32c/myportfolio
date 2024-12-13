import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';
import { useActiveSection } from '../hooks/useActiveSection';

const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Loveday Annointed</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                isActive={activeSection === href.substring(1)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {NAVIGATION_ITEMS.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                isActive={activeSection === href.substring(1)}
                onClick={closeMenu}
                className="block px-3 py-2"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}