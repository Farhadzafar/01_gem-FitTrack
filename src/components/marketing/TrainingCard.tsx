import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Flame } from 'lucide-react';

interface TrainingCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  calories: string;
  imageUrl: string;
}

export function TrainingCard({ id, title, description, duration, calories, imageUrl }: TrainingCardProps) {
  return (
    <Link to={`/training/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-0 p-4 text-white">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-3 opacity-90">{description}</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {duration}
              </span>
              <span className="flex items-center">
                <Flame className="h-4 w-4 mr-1" />
                {calories} cal
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}