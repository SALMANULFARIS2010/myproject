import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSalary = () => {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch salaries from the backend API
    axios.get('/api/salaries')
      .then(response => {
        setSalaries(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching salaries:', error);
        setLoading(false);
      });
  }, []);

  const updateSalary = (id, newSalary) => {
    // Update salary for a specific employee
    axios.put(`/api/salaries/${id}`, { salary: newSalary })
      .then(response => {
        // Update the UI with the updated salary
        const updatedSalaries = salaries.map(salary =>
          salary.id === id ? { ...salary, salary: newSalary } : salary
        );
        setSalaries(updatedSalaries);
      })
      .catch(error => {
        console.error('Error updating salary:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Manage Salary</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Current Salary</th>
            <th>Update Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaries.map(salary => (
            <tr key={salary.id}>
              <td>{salary.name}</td>
              <td>{salary.employeeId}</td>
              <td>${salary.salary}</td>
              <td>
                <input
                  type="number"
                  value={salary.newSalary || ''}
                  onChange={e => {
                    const newSalaries = salaries.map(s =>
                      s.id === salary.id ? { ...s, newSalary: e.target.value } : s
                    );
                    setSalaries(newSalaries);
                  }}
                />
                <button onClick={() => updateSalary(salary.id, salary.newSalary)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSalary;


