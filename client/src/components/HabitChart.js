import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function HabitChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const res = await axios.get('/api/logs');
      const logs = res.data;

      const dates = logs.map((log) => log.date);
      const completion = logs.map((log) => (log.completed ? 1 : 0));

      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Habit Completion',
            data: completion,
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
          },
        ],
      });
    } catch (err) {
      console.error(err);
    }
  };

  return <Line data={chartData} />;
}

export default HabitChart;
