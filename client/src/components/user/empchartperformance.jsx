import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Button } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const { Option } = Select;

// const EmpPerformanceChart = () => {
//   const empid=sessionStorage.getItem('id')  
//   const [performanceData, setPerformanceData] = useState([]);
//   const [startMonth, setStartMonth] = useState('');
//   const [endMonth, setEndMonth] = useState('');

//   const fetchData = () => {
//     // if (startMonth && endMonth) {
//       axios.get(`http://localhost:8000/monthlyP/${empid}`)
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
//       <h2>Performance Chart</h2>
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



const EmpPerformanceChart = () => {
  
  const [performanceData, setPerformanceData] = useState([]);
  // const [startMonth, setStartMonth] = useState('');
  // const [endMonth, setEndMonth] = useState('');
  // const empid=sessionStorage.getItem('id')
  
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

  

  return (
    <div className="performance-chart-container">
      <h2 className="chart-title">Performance Chart</h2>
     
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
export default EmpPerformanceChart;
