import React, { useState, useEffect } from 'react';
import Statistics from './Statistics'; // Assuming you have a Statistics component
import './HabitTracker.css'; // Import the CSS file

const HabitTracker = () => {
  const [habit, setHabit] = useState('');
  const [frequency, setFrequency] = useState('');
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await fetch('https://habittracker-backend-iwy7.onrender.com/api/habits');
        const data = await response.json();
        setHabits(data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };
    fetchHabits();
  }, []);

  const handleAddHabit = async (e) => {
    e.preventDefault();
    if (habit.trim() === '' || frequency.trim() === '') return;

    const newHabit = { title: habit, frequency, completed: false };

    try {
      const response = await fetch('http://localhost:5000/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHabit),
      });

      if (response.ok) {
        const addedHabit = await response.json();
        setHabits([...habits, addedHabit]);
        setHabit('');
        setFrequency('');
      } else {
        console.error('Failed to add habit:', await response.text());
      }
    } catch (error) {
      console.error('Error in adding habit:', error);
    }
  };

  const handleDeleteHabit = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/habits/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setHabits(habits.filter((h) => h._id !== id));
      } else {
        console.error('Failed to delete habit:', await response.text());
      }
    } catch (error) {
      console.error('Error in deleting habit:', error);
    }
  };

  const handleCompleteHabit = async (id) => {
    const updatedHabits = habits.map((habit) =>
      habit._id === id ? { ...habit, completed: !habit.completed } : habit
    );

    setHabits(updatedHabits);

    try {
      await fetch(`http://localhost:5000/api/habits/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !habit.completed }),
      });
    } catch (error) {
      console.error('Error updating habit:', error);
    }
  };

  return (
    <div className="container">
      <h2>Habit Tracker</h2>
      
      <form onSubmit={handleAddHabit}>
        <input 
          type="text" 
          value={habit} 
          onChange={(e) => setHabit(e.target.value)} 
          placeholder="Enter a new habit" 
          required 
        />
        <input 
          type="text" 
          value={frequency} 
          onChange={(e) => setFrequency(e.target.value)} 
          placeholder="Frequency (e.g., Daily, Weekly)" 
          required 
        />
        <button type="submit">Add Habit</button>
      </form>

      <ul>
        {habits.map((h) => (
          <li key={h._id}>
            {h.title} - {h.frequency}
            <div>
              <button onClick={() => handleCompleteHabit(h._id)}>
                {h.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleDeleteHabit(h._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <Statistics habits={habits} />
    </div>
  );
};

export default HabitTracker;
