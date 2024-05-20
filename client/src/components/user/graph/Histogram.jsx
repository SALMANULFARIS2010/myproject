import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HistogramChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((value, index) => `Bin ${index + 1}`),
          datasets: [{
            label: 'Histogram',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color with transparency
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
};

export default HistogramChart;
