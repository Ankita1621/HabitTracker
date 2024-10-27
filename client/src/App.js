import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import HabitTracker from './components/HabitTracker';
import Statistics from './components/Statistics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;
