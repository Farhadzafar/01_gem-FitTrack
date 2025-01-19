import React, { useState } from 'react';
import { Calendar, Clock, Flame, Plus } from 'lucide-react';
import type { Activity } from '../types';
import { ActivityForm } from './ActivityForm';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function ActivityLog() {
  const [showForm, setShowForm] = useState(false);
  const [activities, setActivities] = useLocalStorage<Activity[]>('activities', []);

  const handleAddActivity = (newActivity: Omit<Activity, 'id' | 'date'>) => {
    const activity: Activity = {
      ...newActivity,
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0]
    };
    setActivities([activity, ...activities]);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Today's Activities</h2>
          <button
            onClick={() => setShowForm(true)}
            className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          {activities.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No activities logged today</p>
          ) : (
            activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-indigo-100 rounded-full">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium capitalize">{activity.type}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.duration} min
                      </span>
                      <span className="flex items-center">
                        <Flame className="h-4 w-4 mr-1" />
                        {activity.calories} cal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showForm && (
        <ActivityForm
          onSubmit={handleAddActivity}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}