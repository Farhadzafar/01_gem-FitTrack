import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Activity } from '../types';
import { ActivityForm } from '../components/ActivityForm';
import { Calendar, Clock, Flame, Plus } from 'lucide-react';

export function ActivitiesPage() {
  const [showForm, setShowForm] = React.useState(false);
  const [activities, setActivities] = useLocalStorage<Activity[]>('activities', []);

  const handleAddActivity = (newActivity: Omit<Activity, 'id' | 'date'>) => {
    const activity: Activity = {
      ...newActivity,
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0]
    };
    setActivities([activity, ...activities]);
  };

  // Group activities by date
  const groupedActivities = activities.reduce((groups, activity) => {
    const date = activity.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(activity);
    return groups;
  }, {} as Record<string, Activity[]>);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Activity History</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          Add Activity
        </button>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedActivities).map(([date, dateActivities]) => (
          <div key={date} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                {new Date(date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {dateActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
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
                </div>
              ))}
            </div>
          </div>
        ))}

        {activities.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Calendar className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No activities</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding your first activity!</p>
          </div>
        )}
      </div>

      {showForm && (
        <ActivityForm
          onSubmit={handleAddActivity}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}