import React from 'react';
import { ActivityLog } from '../components/ActivityLog';
import { GoalTracker } from '../components/GoalTracker';
import { RecommendedExercises } from '../components/RecommendedExercises';

export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityLog />
          <div className="mt-6">
            <RecommendedExercises />
          </div>
        </div>
        <div>
          <GoalTracker />
        </div>
      </div>
    </div>
  );
}