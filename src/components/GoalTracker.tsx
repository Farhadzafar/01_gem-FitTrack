import React, { useState } from 'react';
import { Target, Plus } from 'lucide-react';
import type { Goal } from '../types';
import { GoalForm } from './GoalForm';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function GoalTracker() {
  const [showForm, setShowForm] = useState(false);
  const [goals, setGoals] = useLocalStorage<Goal[]>('goals', []);

  const handleAddGoal = (newGoal: Omit<Goal, 'id'>) => {
    const goal: Goal = {
      ...newGoal,
      id: crypto.randomUUID()
    };
    setGoals([...goals, goal]);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Goals</h2>
          <button
            onClick={() => setShowForm(true)}
            className="p-2 bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4">
          {goals.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No goals set yet</p>
          ) : (
            goals.map((goal) => (
              <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-indigo-600" />
                    <h3 className="font-medium capitalize">{goal.type}</h3>
                  </div>
                  <span className="text-sm text-gray-500">
                    Due {new Date(goal.deadline).toLocaleDateString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(100, (goal.current / goal.target) * 100)}%`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>{goal.current} {goal.unit}</span>
                  <span>{goal.target} {goal.unit}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showForm && (
        <GoalForm
          onSubmit={handleAddGoal}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}