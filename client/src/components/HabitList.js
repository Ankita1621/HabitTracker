import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HabitList() {
  const [habits, setHabits] = useState([]);
  const [logs, setLogs] = useState({});

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    try {
      const res = await axios.get('/api/habits');
      setHabits(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggle = async (habitId) => {
    const log = { habitId, date: new Date(), completed: !logs[habitId] };
    try {
      await axios.post('/api/logs', log);
      setLogs((prevLogs) => ({ ...prevLogs, [habitId]: !prevLogs[habitId] }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {habits.map((habit) => (
        <div key={habit._id}>
          <h3>{habit.title}</h3>
          <p>{habit.description}</p>
          <input
            type="checkbox"
            checked={logs[habit._id] || false}
            onChange={() => handleToggle(habit._id)}
          />
        </div>
      ))}
    </div>
  );
}

export default HabitList;
