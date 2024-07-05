import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const dummyData = [
  { state: "AL", mileage: 5000 }, { state: "AK", mileage: 4500 }, { state: "AZ", mileage: 6000 },
  // ... (include all state data here)
];

const MileageDashboardGraph = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow">
          <p className="font-bold">{label}</p>
          <p>Mileage: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">US Minimum Personal Mileage by State</h1>
      <div className="mb-4 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
        <p className="font-bold">Note</p>
        <p>This dashboard uses dummy data for illustration. In a real application, you would fetch up-to-date data from a reliable source.</p>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={dummyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="mileage" 
            fill="#8884d8"
            onMouseEnter={(data) => setHoveredBar(data.state)}
            onMouseLeave={() => setHoveredBar(null)}
          />
        </BarChart>
      </ResponsiveContainer>
      {hoveredBar && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p><strong>Selected State:</strong> {hoveredBar}</p>
          <p><strong>Mileage:</strong> {dummyData.find(item => item.state === hoveredBar).mileage} miles</p>
        </div>
      )}
    </div>
  );
};

export default MileageDashboardGraph;
