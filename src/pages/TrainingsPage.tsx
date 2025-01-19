import React from 'react';
import { trainings } from '../data/trainings';
import { TrainingCard } from '../components/marketing/TrainingCard';

export function TrainingsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Workouts</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive collection of workouts designed to help you achieve your fitness goals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainings.map((training) => (
          <TrainingCard key={training.id} {...training} />
        ))}
      </div>
    </div>
  );
}