// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EmployeePerformance = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     // Fetch employee performance data
//     axios.get('https://your-api-url/employee-performance')
//       .then(response => {
//         setPerformanceData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Employee Performance</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Performance Rating</th>
//             <th>Comments</th>
//           </tr>
//         </thead>
//         <tbody>
//           {performanceData.map(employee => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>{employee.name}</td>
//               <td>{employee.rating}</td>
//               <td>{employee.comments}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeePerformance;
