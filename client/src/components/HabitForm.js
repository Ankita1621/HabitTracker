import React, { useState } from 'react';
import axios from 'axios';

function HabitForm({ onHabitAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHabit = { title, description, startDate: new Date() };
    try {
      const res = await axios.post('/api/habits', newHabit);
      onHabitAdded(res.data); // Refresh habit list
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Habit title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;
