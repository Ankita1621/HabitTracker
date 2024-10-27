import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Your Habit Tracker!</h1>
      <p className="home-intro">
        Track your habits and achieve your goals with our simple and effective habit tracker. 
        Whether you want to develop new habits or break old ones, we’ve got you covered.
      </p>
      
      <div className="home-links">
        <h2>Get Started</h2>
        <ul>
          <li>
            <a className="home-link" href="/habit-tracker">Track Your Habits</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;