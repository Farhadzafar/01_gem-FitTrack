import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8" />
          <h1 className="text-2xl font-bold">FitTrack</h1>
        </NavLink>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-200 font-semibold' : ''}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/activities" 
            className={({ isActive }) =>
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-200 font-semibold' : ''}`
            }
          >
            Activities
          </NavLink>
          <NavLink 
            to="/goals" 
            className={({ isActive }) =>
              `hover:text-indigo-200 transition-colors ${isActive ? 'text-indigo-200 font-semibold' : ''}`
            }
          >
            Goals
          </NavLink>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-indigo-600 shadow-lg md:hidden z-50">
          <div className="flex flex-col p-4 space-y-3">
            <NavLink 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors ${
                  isActive ? 'bg-indigo-700 font-semibold' : ''
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/activities" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors ${
                  isActive ? 'bg-indigo-700 font-semibold' : ''
                }`
              }
            >
              Activities
            </NavLink>
            <NavLink 
              to="/goals" 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors ${
                  isActive ? 'bg-indigo-700 font-semibold' : ''
                }`
              }
            >
              Goals
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}