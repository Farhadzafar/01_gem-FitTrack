import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { DashboardPage } from './pages/DashboardPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { GoalsPage } from './pages/GoalsPage';
import { TrainingDetailsPage } from './pages/TrainingDetailsPage';
import { MarketingPage } from './pages/MarketingPage';
import { TrainingsPage } from './pages/TrainingsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/about" element={<MarketingPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/trainings" element={<TrainingsPage />} />
          <Route path="/training/:id" element={<TrainingDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}