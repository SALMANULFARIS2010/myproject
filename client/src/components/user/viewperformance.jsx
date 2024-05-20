// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import './performance.css'; // Import CSS file

// const PerformanceDashboard = () => {
//   const [performanceData, setPerformanceData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/performanceData');
//         setPerformanceData(response.data);
//       } catch (error) {
//         console.error('Error fetching performance data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="performance-container">
//       <h1>Performance Dashboard</h1>
//       {performanceData.map((employee) => (
//         <div key={employee.id} className="employee-performance">
//           <h2>{employee.name}</h2>
//           <div className="project-performance">
//             <h3>Project Performance</h3>
//             <ul>
//               {employee.projects.map((project) => (
//                 <li key={project.id}>
//                   {project.name}: {project.performance}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="task-performance">
//             <h3>Task Performance</h3>
//             <ul>
//               {employee.tasks.map((task) => (
//                 <li key={task.id}>
//                   {task.name}: {task.performance}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PerformanceDashboard;
