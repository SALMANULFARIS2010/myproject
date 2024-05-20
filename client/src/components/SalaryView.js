// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table, Spin } from 'antd';

// const SalaryView = ({ employeeId }) => {
//   const [salaries, setSalaries] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/salaries/${employeeId}`)
//       .then(res => {`
//         setSalaries(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching salaries:', err);
//         setLoading(false);
//       });
//   }, [employeeId]);

//   const columns = [
//     {
//       title: 'Amount',
//       dataIndex: 'amount',
//       key: 'amount',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//       render: (date) => new Date(date).toLocaleDateString(),
//     },
//   ];

//   return (
//     <div>
//       <h2>Salary Information</h2>
//       <Spin spinning={loading}>
//         <Table columns={columns} dataSource={salaries} rowKey="_id" />
//       </Spin>
//     </div>
//   );
// };

// export default SalaryView;


// SalaryView.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [employeeId, setEmployeeId] = useState('');
//   const [salaries, setSalaries] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchSalaries = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/salaries/${employeeId}`);
//       setSalaries(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   useEffect(() => {
//     if (employeeId) {
//       fetchSalaries();
//     }
//   }, [employeeId]);

//   return (
//     <div>
//       <h1>Employee Salaries</h1>
//       <input
//         type="text"
//         placeholder="Enter employee ID"
//         value={employeeId}
//         onChange={(e) => setEmployeeId(e.target.value)}
//       />
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <ul>
//         {salaries.map((salary) => (
//           <li key={salary._id}>
//             <p>Amount: {salary.amount}</p>
//             <p>Date: {new Date(salary.date).toLocaleDateString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SalaryView.css'

function App() {
  const [employeeId, setEmployeeId] = useState('');
  const [salaries, setSalaries] = useState([]);
  const [error, setError] = useState(null);

  const fetchSalaries = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/salaries/${employeeId}`);
      setSalaries(response.data);
    } catch (err) {
      setError(err.response.data.message || 'An error occurred');
    }
  };

  useEffect(() => {
    if (employeeId) {
      fetchSalaries();
    }
  }, [employeeId]);

  return (
    <div className="app-container">
      <h1 className="app-title">Employee Salaries</h1>
      <input
        type="text"
        placeholder="Enter employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="input-field"
      />
      {error && <p className="error-message">{error}</p>}
      <ul className="salary-list">
        {salaries.map((salary) => (
          <li key={salary._id} className="salary-item">
            <p className="amount">Amount: {salary.amount}</p>
            <p className="date">Date: {new Date(salary.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

