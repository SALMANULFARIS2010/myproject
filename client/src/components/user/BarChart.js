// import React from 'react'
// import {Bar} from "react-chartjs-2"
// import './BarChart.css'

// function BarChart() {
//     const state={
//         labels:["January","February","March","April","May"],
//         datasets:[{label:"Rainfall",
//                          backgroundColor:"grey",
//                         borderColor:"red",
//                          borderWidth:2,
//                         data:[65,45,123,42,43]}]
//     }

//     const options={plugins:{legend:{display:true,position:"bottom"},
//      title:{text:"Average Rainfall per month"},display:true,fontSize:20}}
    
  
//     return (
//     <div className="barchart">
//         <Bar data={state} options={options}/>
//         <p style={{ textAlign:"center"}}></p>
       
//     </div>
//   )
// }

// export default BarChart

import React from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css';

function BarChart() {
    const data = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "Rainfall",
            backgroundColor: "grey",
            borderColor: "red",
            borderWidth: 2,
            data: [65, 45, 123, 42, 43]
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Rainfall (mm)'
                }
            }
        }
    };

    return (
        <div className="barchart">
            <Bar data={data} options={options} />
        </div>
    );
}

export default BarChart;
