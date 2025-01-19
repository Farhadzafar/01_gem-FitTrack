import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Dashboard' },
  { path: '/trainings', label: 'Trainings' },
  { path: '/activities', label: 'Activities' },
  { path: '/goals', label: 'Goals' }
];

interface NavLinksProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({ mobile = false, onItemClick }: NavLinksProps) {
  const baseStyles = mobile
    ? 'px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors w-full'
    : 'hover:text-indigo-200 transition-colors';

  return (
    <>
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          onClick={onItemClick}
          className={({ isActive }) =>
            `${baseStyles} ${isActive ? (mobile ? 'bg-indigo-700 font-semibold' : 'text-indigo-200 font-semibold') : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </>
  );
}