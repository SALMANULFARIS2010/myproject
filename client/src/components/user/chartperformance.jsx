// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Select, Button } from 'antd';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const { Option } = Select;

// const PerformanceChart = () => {
//   const [performanceData, setPerformanceData] = useState([]);
//   const [startMonth, setStartMonth] = useState('');
//   const [endMonth, setEndMonth] = useState('');

//   const fetchData = () => {
//     // if (startMonth && endMonth) {
//       axios.get(`http://localhost:8000/monthlyP`)
//         .then(res => {
//           setPerformanceData(res.data);
//         })
//         .catch(err => {
//           console.error('Error fetching performance data:', err);
//         });
//     // }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Performancess Chart</h2>
//       {/* <div>
//         <select  onChange={(e) => setStartMonth(e.target.value)} >
//         <option value='January'>January</option>
//         <option selected>select start month</option>
//         </select>
        
//         <select  onChange={(e) => setEndMonth(e.target.value)} >
//         <option value='Febraury'>February</option>
//         <option selected>select end month</option>
//         </select>
//         <Button type="primary" onClick={fetchData}>Fetch Data</Button>
//       </div> */}
//       <LineChart width={600} height={300} data={performanceData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="month" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="performance" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   );
// };

// export default PerformanceChart;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Button } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './PerformanceChart.css'; // Import your CSS file for styling

const { Option } = Select;

const PerformanceChart = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [startMonth, setStartMonth] = useState('');
  const [endMonth, setEndMonth] = useState('');

  const fetchData = () => {
    axios.get(`http://localhost:8000/monthlyP`)
      .then(res => {
        console.log('Response:', res.data); // Log the API response for debugging
        setPerformanceData(res.data);
      })
      .catch(err => {
        console.error('Error fetching performance data:', err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStartMonthChange = (value) => {
    console.log('Selected start month:', value); // Log the selected start month for debugging
    setStartMonth(value);
  };

  const handleEndMonthChange = (value) => {
    console.log('Selected end month:', value); // Log the selected end month for debugging
    setEndMonth(value);
  };

  return (
    <div className="performance-chart-container">
      <h2 className="chart-title">Performance Chart</h2>
      {/* Add filters for selecting start and end months */}
      <div className="chart-filters">
        <Select value={startMonth} onChange={handleStartMonthChange} placeholder="Select start month">
          <Option value="January">January</Option>
          {/* Add options for other months */}
        </Select>
        <Select value={endMonth} onChange={handleEndMonthChange} placeholder="Select end month">
          <Option value="February">February</Option>
          {/* Add options for other months */}
        </Select>
        <Button type="primary" onClick={fetchData}>Fetch Data</Button>
      </div>
      {/* Display the line chart */}
      <div className="chart-wrapper">
        <LineChart width={800} height={400} data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="performance" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default PerformanceChart;
