import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['วันที่ 1', 'วันที่ 2', 'วันที่ 3', 'วันที่ 4', 'วันที่ 5', 'วันที่ 6', 'วันที่ 7'],
    datasets: [
      {
        // max data = 10
        // min data = 0
        label: 'ความปวด',
        data: [8, 7, 6, 7, 5, 4, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(54, 61, 88, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // type chart line
    
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        // display: true,
        display: false,
        text: 'อาการปวด',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;