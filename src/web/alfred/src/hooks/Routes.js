import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import TutorialPage from '../pages/Tutorial';
import Gravacao from '../pages/Gravacao';
import History from '../pages/History';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tutorial" element={<TutorialPage />} />
        <Route path="/gravacao" element={<Gravacao />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
