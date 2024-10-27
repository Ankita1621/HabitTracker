import React from 'react';

const Statistics = ({ habits = [] }) => { // Default to an empty array
  const totalHabits = habits.length; // Total number of habits
  const completedHabits = habits.filter(habit => habit.completed).length; // Count of completed habits
  const completionRate = totalHabits === 0 ? 0 : ((completedHabits / totalHabits) * 100).toFixed(2); // Completion rate percentage

  return (
    <div>
      <h2>Statistics</h2>
      <p>Total Habits: {totalHabits}</p>
      <p>Completed Habits: {completedHabits}</p>
      <p>Completion Rate: {completionRate}%</p>
    </div>
  );
};

export default Statistics;
