import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/about" className="flex items-center space-x-2 text-white">
      <Dumbbell className="h-8 w-8" />
      <h1 className="text-2xl font-bold">FitTrack</h1>
    </Link>
  );
}