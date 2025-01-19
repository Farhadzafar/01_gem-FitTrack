import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Goal } from '../types';
import { GoalForm } from '../components/GoalForm';
import { Target, Plus, Trophy, AlertCircle } from 'lucide-react';

export function GoalsPage() {
  const [showForm, setShowForm] = React.useState(false);
  const [goals, setGoals] = useLocalStorage<Goal[]>('goals', []);

  const handleAddGoal = (newGoal: Omit<Goal, 'id'>) => {
    const goal: Goal = {
      ...newGoal,
      id: crypto.randomUUID()
    };
    setGoals([...goals, goal]);
  };

  const activeGoals = goals.filter(goal => new Date(goal.deadline) >= new Date());
  const completedGoals = goals.filter(goal => goal.current >= goal.target);
  const expiredGoals = goals.filter(
    goal => new Date(goal.deadline) < new Date() && goal.current < goal.target
  );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Goals</h1>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          New Goal
        </button>
      </div>

      <div className="space-y-6">
        {activeGoals.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Goals</h2>
            <div className="space-y-4">
              {activeGoals.map((goal) => (
                <div key={goal.id} className="bg-white p-4 rounded-lg shadow-md">
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
                      className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
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
              ))}
            </div>
          </section>
        )}

        {completedGoals.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Completed Goals</h2>
            <div className="space-y-4">
              {completedGoals.map((goal) => (
                <div key={goal.id} className="bg-green-50 p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium capitalize">{goal.type}</h3>
                    </div>
                    <span className="text-sm text-green-600">Completed!</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Achieved {goal.target} {goal.unit}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {expiredGoals.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Expired Goals</h2>
            <div className="space-y-4">
              {expiredGoals.map((goal) => (
                <div key={goal.id} className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                      <h3 className="font-medium capitalize">{goal.type}</h3>
                    </div>
                    <span className="text-sm text-gray-500">Expired</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Reached {goal.current} of {goal.target} {goal.unit}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {goals.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <Target className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No goals yet</h3>
            <p className="mt-1 text-sm text-gray-500">Start by creating your first goal!</p>
          </div>
        )}
      </div>

      {showForm && (
        <GoalForm
          onSubmit={handleAddGoal}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}