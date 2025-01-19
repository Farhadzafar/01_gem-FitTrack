import { Training } from '../types';

export const trainings: Training[] = [
  {
    id: 'hiit-cardio',
    title: 'HIIT Cardio Blast',
    description: 'High-intensity interval training to maximize calorie burn',
    duration: '30 min',
    calories: '400',
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=2070',
    benefits: [
      'Increased metabolism',
      'Improved cardiovascular health',
      'Enhanced endurance',
      'Quick results'
    ],
    schedule: [
      { phase: 'Warm-up', duration: '5 min', intensity: 'Light' },
      { phase: 'High Intensity', duration: '1 min', intensity: 'Maximum' },
      { phase: 'Recovery', duration: '1 min', intensity: 'Light' },
      { phase: 'Repeat 6 times', duration: '12 min', intensity: 'Varying' },
      { phase: 'Core Work', duration: '8 min', intensity: 'Medium' },
      { phase: 'Cool-down', duration: '5 min', intensity: 'Light' }
    ],
    equipment: ['None required', 'Optional: Mat', 'Optional: Water bottle']
  },
  {
    id: 'yoga-flow',
    title: 'Mindful Yoga Flow',
    description: 'Connect mind and body with flowing movements',
    duration: '45 min',
    calories: '200',
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070',
    benefits: [
      'Improved flexibility',
      'Stress reduction',
      'Better posture',
      'Enhanced mindfulness'
    ],
    schedule: [
      { phase: 'Breathing Exercise', duration: '5 min', intensity: 'Light' },
      { phase: 'Sun Salutations', duration: '10 min', intensity: 'Medium' },
      { phase: 'Standing Poses', duration: '15 min', intensity: 'Medium' },
      { phase: 'Floor Work', duration: '10 min', intensity: 'Medium' },
      { phase: 'Savasana', duration: '5 min', intensity: 'Light' }
    ],
    equipment: ['Yoga mat', 'Optional: Blocks', 'Optional: Strap']
  },
  {
    id: 'strength-core',
    title: 'Core Strength',
    description: 'Build a strong foundation with targeted core exercises',
    duration: '25 min',
    calories: '300',
    difficulty: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2070',
    benefits: [
      'Stronger core muscles',
      'Better stability',
      'Improved posture',
      'Reduced back pain'
    ],
    schedule: [
      { phase: 'Dynamic Warm-up', duration: '5 min', intensity: 'Light' },
      { phase: 'Core Circuit 1', duration: '7 min', intensity: 'High' },
      { phase: 'Active Recovery', duration: '1 min', intensity: 'Light' },
      { phase: 'Core Circuit 2', duration: '7 min', intensity: 'High' },
      { phase: 'Cool-down', duration: '5 min', intensity: 'Light' }
    ],
    equipment: ['Exercise mat', 'Optional: Dumbbells', 'Optional: Resistance bands']
  }
];