// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const PerformanceChart = ({ data }) => {
//   return (
//     <BarChart
//       width={600}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="userId" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="performance" fill="#8884d8" />
//     </BarChart>
//   );
// };

// export default PerformanceChart;


// import React, { useEffect } from 'react';

// const PerformanceChart = ({ data }) => {
//   useEffect(() => {
//     // Load the Visualization API and the corechart package
//     google.charts.load('current', { packages: ['corechart'] });

//     // Set a callback to run when the Google Visualization API is loaded
//     google.charts.setOnLoadCallback(drawChart);

//     function drawChart() {
//       const chartData = [['User ID', 'Performance']];
//       data.forEach(({ userId, performance }) => {
//         chartData.push([userId, parseInt(performance)]);
//       });

//       const dataTable = google.visualization.arrayToDataTable(chartData);

//       const options = {
//         title: 'Performance Chart',
//         chartArea: { width: '50%' },
//         hAxis: {
//           title: 'User ID',
//           minValue: 0,
//         },
//         vAxis: {
//           title: 'Performance',
//         },
//       };

//       const chart = new google.visualization.BarChart(document.getElementById('chart_div'));

//       chart.draw(dataTable, options);
//     }
//   }, [data]);

//   return <div id="chart_div" style={{ width: '100%', height: '400px' }}></div>;
// };

// export default PerformanceChart;

// import React, { useEffect } from 'react';

// const PerformanceChart = ({ data }) => {
//   useEffect(() => {
//     const loadGoogleCharts = () => {
//       const script = document.createElement('script');
//       script.src = 'https://www.gstatic.com/charts/loader.js';
//       script.async = true;
//       script.onload = () => {
//         google.charts.load('current', { packages: ['corechart'] });
//         google.charts.setOnLoadCallback(drawChart);
//       };
//       document.body.appendChild(script);
//     };

//     const drawChart = () => {
//       const chartData = [['User ID', 'Performance']];
//       data.forEach(({ userId, performance }) => {
//         chartData.push([userId, parseInt(performance)]);
//       });

//       const dataTable = google.visualization.arrayToDataTable(chartData);

//       const options = {
//         title: 'Performance Chart',
//         chartArea: { width: '50%' },
//         hAxis: {
//           title: 'User ID',
//           minValue: 0,
//         },
//         vAxis: {
//           title: 'Performance',
//         },
//       };

//       const chart = new google.visualization.BarChart(document.getElementById('chart_div'));

//       chart.draw(dataTable, options);
//     };

//     loadGoogleCharts();

//     return () => {
//       // Clean up code, remove script tag
//       const script = document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');
//       if (script) {
//         script.remove();
//       }
//     };
//   }, [data]);

//   return <div id="chart_div" style={{ width: '100%', height: '400px' }}></div>;
// };

// export default PerformanceChart;





