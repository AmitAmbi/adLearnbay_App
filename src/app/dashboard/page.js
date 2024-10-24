// src/app/components/Dashboard.js

"use client";
import WebVitalsChart from '../components/global/charts/WebVitalsChart';
// Import other components if necessary

const Dashboard = () => {
  return (
    <div>
      <h1>Core Web Vitals Dashboard</h1>
      <WebVitalsChart />
      {/* Add other components like performance metrics, additional charts, etc. */}
    </div>
  );
};

export default Dashboard;
