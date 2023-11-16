// Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = ({ authToken }) => {
  const [dashboardData, setDashboardData] = useState('');

  useEffect(() => {
    if (authToken) {
      // Fetch dashboard data from the backend
      fetch('backend-url/api/dashboard', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setDashboardData(data))
        .catch((error) => console.error('Error fetching dashboard data:', error));
    }
  }, [authToken]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Display the fetched dashboard data */}
    </div>
  );
};

export default Dashboard;
