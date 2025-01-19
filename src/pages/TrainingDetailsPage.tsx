import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Flame, Target, Dumbbell } from 'lucide-react';
import { trainings } from '../data/trainings';

export function TrainingDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const training = trainings.find(t => t.id === id);

  if (!training) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Training not found</h2>
          <button
            onClick={() => navigate('/trainings')}
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Trainings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate('/trainings')}
        className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-700"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Trainings
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={training.imageUrl}
          alt={training.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{training.title}</h1>
          <p className="text-gray-600 mb-6">{training.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              <span>{training.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-indigo-600" />
              <span>{training.difficulty}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Flame className="h-5 w-5 text-indigo-600" />
              <span>{training.calories} cal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-5 w-5 text-indigo-600" />
              <span>Equipment</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {training.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Required Equipment</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {training.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Workout Schedule</h2>
            <div className="space-y-4">
              {training.schedule.map((phase, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{phase.phase}</h3>
                    <p className="text-sm text-gray-500">{phase.intensity} Intensity</p>
                  </div>
                  <div className="text-right">
                    <span className="text-indigo-600 font-medium">{phase.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}