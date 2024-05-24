import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MultiLineChart = () => {
  const data = {
    labels: ['วันที่ 1', 'วันที่ 2', 'วันที่ 3', 'วันที่ 4', 'วันที่ 5', 'วันที่ 6', 'วันที่ 7', 'วันที่ x'],
    datasets: [
      {
        label: 'ความปวด',
        data: [8, 7, 6, 7, 5, 4, 2, 0],
        fill: false,
        borderColor: 'rgba(54, 61, 88, 1)',
        tension: 0.1,
      },
      {
        label: 'xxxxx',
        data: [3, 5, 2, 5, 7, 8, 9 , 9],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Multi-Line Chart Example',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MultiLineChart;