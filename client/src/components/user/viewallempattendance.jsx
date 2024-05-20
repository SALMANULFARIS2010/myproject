// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const EmployeeAttendanceall = () => {
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchAttendanceData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/employeeAttendanceall');
//         setAttendanceData(response.data.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchAttendanceData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Employee Attendance</h1>
//       {attendanceData.length === 0 ? (
//         <div>No attendance records found</div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Date</th>
//               <th>Punch In Time</th>
//               <th>Punch Out Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceData.map((record) => (
//               <tr key={record._id}>
//                 <td>{record.name}</td>
//                 <td>{new Date(record.date).toLocaleDateString()}</td>
//                 <td>{new Date(record.punchInTime).toLocaleTimeString()}</td>
//                 <td>{record.punchOutTime ? new Date(record.punchOutTime).toLocaleTimeString() : 'Not punched out'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeAttendanceall;


import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, List, Typography, Space } from 'antd';

const { Text } = Typography;

function AttendanceViews() {
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  const fetchAttendances = async () => {
    try {
      const response = await axios.get('http://localhost:8000/attendances');
      setAttendances(response.data);
    } catch (err) {
      setError(err.response.data.message || 'An error occurred');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Employees Attendance</h1>
      <Space>
        <Button type="primary" onClick={fetchAttendances}>Fetch Attendance</Button>
      </Space>
      {error && <Text type="danger">{error}</Text>}
      <h2>Attendance Records:</h2>
      <List
        dataSource={attendances}
        renderItem={attendance => (
          <List.Item key={attendance._id}>
            <Space direction="vertical">
              <Text>User ID: {attendance.userId}</Text>
              <Text>Name: {attendance.name}</Text>
              <Text>Date: {new Date(attendance.date).toLocaleDateString()}</Text>
              <Text>Punch In Time: {attendance.punchInTime}</Text>
              <Text>Punch Out Time: {attendance.punchOutTime}</Text>
              <Text>Attendance Mark: {attendance.attendmark}</Text>
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
}

export default AttendanceViews;

