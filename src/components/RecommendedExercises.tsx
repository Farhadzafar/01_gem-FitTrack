import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const recommendations = [
  {
    id: 'high-intensity-interval-training',
    title: 'High-Intensity Interval Training',
    duration: '20 min',
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'strength-training',
    title: 'Strength Training',
    duration: '45 min',
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000'
  }
];

export function RecommendedExercises() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Recommended for You</h2>
        <Zap className="h-5 w-5 text-indigo-600" />
      </div>
      <div className="grid gap-4">
        {recommendations.map((exercise) => (
          <div
            key={exercise.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => navigate(`/training/${exercise.id}`)}
          >
            <div className="relative">
              <img
                src={exercise.imageUrl}
                alt={exercise.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="font-semibold">{exercise.title}</h3>
                  <div className="flex items-center mt-1 text-sm">
                    <span>{exercise.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{exercise.difficulty}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}