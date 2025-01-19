export interface Activity {
  id: string;
  type: 'running' | 'cycling' | 'swimming' | 'weightlifting' | 'yoga';
  duration: number; // in minutes
  calories: number;
  date: string;
}

export interface Goal {
  id: string;
  type: 'weight' | 'activity' | 'strength';
  target: number;
  current: number;
  unit: string;
  deadline: string;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  duration: string;
  calories: string;
  difficulty: string;
  imageUrl: string;
  benefits: string[];
  schedule: {
    phase: string;
    duration: string;
    intensity: string;
  }[];
  equipment: string[];
}