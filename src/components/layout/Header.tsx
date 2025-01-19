import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { MobileNav } from './MobileNav';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-indigo-700 transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLinks />
        </nav>
      </div>

      {/* Mobile navigation */}
      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}