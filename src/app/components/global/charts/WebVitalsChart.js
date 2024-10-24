// src/app/components/WebVitalsChart.js

"use client";
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from './WebVitalsChart.module.css'; // Use a CSS module for styling

const WebVitalsChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/analytics');
        const metrics = await response.json();
        setData(metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  // Prepare chart data
  const chartData = {
    labels: ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'], // Labels for the metrics
    datasets: [
      {
        label: 'Performance Score',
        data: [
          data.find(metric => metric.name === 'CLS')?.value || 0,
          data.find(metric => metric.name === 'FID')?.value || 0,
          data.find(metric => metric.name === 'FCP')?.value || 0,
          data.find(metric => metric.name === 'LCP')?.value || 0,
          data.find(metric => metric.name === 'TTFB')?.value || 0,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // CLS color
          'rgba(54, 162, 235, 0.6)', // FID color
          'rgba(255, 206, 86, 0.6)', // FCP color
          'rgba(75, 192, 192, 0.6)', // LCP color
          'rgba(153, 102, 255, 0.6)', // TTFB color
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Performance Percentage (%)',
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Core Web Vitals Performance</h2>
      {loading ? <p>Loading...</p> : <Bar data={chartData} options={options} />}
    </div>
  );
};

export default WebVitalsChart;
