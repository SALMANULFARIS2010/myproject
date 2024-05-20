import React, { useEffect, useState } from 'react';
import HistogramChart from './graph/Histogram';

const Perfomance = () => {
    const [histo,setHisto]=useState([]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setHisto(generateRandomNumbers());
        },5000)
        return()=>clearInterval(interval);
    },[])
    function generateRandomNumbers(){
        const randomNumbers =Array.from({length:7},()=>Math.floor(Math.random()*100))
        return randomNumbers;
    }
  const data = histo;

  return (
    <div>
      <h1>Perfomance</h1>
      <HistogramChart data={data} />
    </div>
  );
};

export default Perfomance;
