import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, Heart, Target, Trophy, Users, BarChart, Shield,
  Clock, Zap, Smartphone, Brain
} from 'lucide-react';
import { TrainingCard } from '../components/marketing/TrainingCard';
import { Footer } from '../components/marketing/Footer';

const featuredTrainings = [
  {
    id: 'hiit-cardio',
    title: 'HIIT Cardio Blast',
    description: 'High-intensity interval training to maximize calorie burn',
    duration: '30 min',
    calories: '400',
    imageUrl: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'yoga-flow',
    title: 'Mindful Yoga Flow',
    description: 'Connect mind and body with flowing movements',
    duration: '45 min',
    calories: '200',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'strength-core',
    title: 'Core Strength',
    description: 'Build a strong foundation with targeted core exercises',
    duration: '25 min',
    calories: '300',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=2070'
  }
];

export function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Fitness Journey</h1>
            <p className="text-xl md:text-2xl mb-8">Track, analyze, and achieve your fitness goals with FitTrack</p>
            <Link
              to="/dashboard"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="10k+" label="Active Users" />
            <StatCard number="500+" label="Workouts" />
            <StatCard number="95%" label="Success Rate" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FitTrack?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart className="h-8 w-8" />}
              title="Smart Analytics"
              description="Advanced tracking and insights for your fitness journey"
            />
            <FeatureCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Mobile First"
              description="Access your workouts and progress anywhere, anytime"
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8" />}
              title="AI Powered"
              description="Personalized recommendations based on your performance"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Real-time Updates"
              description="Instant feedback and progress tracking"
            />
          </div>
        </div>
      </section>

      {/* Featured Trainings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Workouts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTrainings.map((training) => (
              <TrainingCard key={training.id} {...training} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Trophy className="h-6 w-6" />}
              title="Achievement Tracking"
              description="Celebrate your milestones and track your accomplishments"
            />
            <BenefitCard
              icon={<Users className="h-6 w-6" />}
              title="Community"
              description="Join a community of fitness enthusiasts"
            />
            <BenefitCard
              icon={<Shield className="h-6 w-6" />}
              title="Data Privacy"
              description="Your fitness data is secure and private"
            />
            <BenefitCard
              icon={<Heart className="h-6 w-6" />}
              title="Health Focus"
              description="Holistic approach to health and wellness"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-xl opacity-90 mb-8">Join thousands of users who have achieved their fitness goals with FitTrack</p>
          <Link
            to="/dashboard"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-block p-3 bg-indigo-100 text-indigo-600 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-4">
      <div className="text-3xl font-bold text-indigo-600 mb-1">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}