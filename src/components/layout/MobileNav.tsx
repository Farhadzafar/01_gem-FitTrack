import React from 'react';
import { NavLinks } from './NavLinks';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <nav className="absolute top-full left-0 right-0 bg-indigo-600 shadow-lg md:hidden z-50">
      <div className="flex flex-col p-4 space-y-3">
        <NavLinks mobile onItemClick={onClose} />
      </div>
    </nav>
  );
}