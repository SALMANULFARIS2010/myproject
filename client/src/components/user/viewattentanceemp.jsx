// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import axios for making API calls

// const ViewAttendanceEmp = ({ userId }) => {
//   const [attendanceList, setAttendanceList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       try {
//         const response = await axios.get(`/employee/${userId}/attendance`);
//         setAttendanceList(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching attendance:', error);
//         setLoading(false);
//       }
//     };

//     fetchAttendance();
//   }, [userId]); // Fetch attendance data when the component mounts and if userId changes

//   return (
//     <div>
//       <h2>Your Attendance</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : attendanceList.length === 0 ? (
//         <p>No attendance recorded yet</p>
//       ) : (
//         <ul>
//           {attendanceList.map((attendance, index) => (
//             <li key={index}>{attendance.date} - {attendance.status}</li>
//             // Assuming attendance object has 'date' and 'status' properties
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ViewAttendanceEmp;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AttendanceTable() {
//     const [attendances, setAttendances] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchAttendances = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/attendances');
//                 setAttendances(response.data);
//             } catch (error) {
//                 setError(error.response.data.message || 'An error occurred');
//             }
//         };

//         fetchAttendances();
//     }, []);

//     return (
//         <div>
//             <h1>Attendance Table</h1>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Employee ID</th>
//                         <th>Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {attendances.map(attendance => (
//                         <tr key={attendance._id}>
//                             <td>{attendance.employeeId}</td>
//                             <td>{attendance.date}</td>
//                             <td>{attendance.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AttendanceTable;



// import React, { useState } from 'react';
// import axios from 'axios';

// function AttendanceView() {
//   const [attendanceId, setAttendanceId] = useState('');
//   const [attendance, setAttendance] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchAttendance = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendances/${attendanceId}`);
//       setAttendance(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <h1>View Attendance</h1>
//       <input
//         type="text"
//         placeholder="Enter attendance ID"
//         value={attendanceId}
//         onChange={(e) => setAttendanceId(e.target.value)}
//       />
//       <button onClick={fetchAttendance}>View Attendance</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {attendance && (
//         <div>
//           <p>User ID: {attendance.userId}</p>
//           <p>Name: {attendance.name}</p>
//           <p>Date: {attendance.date}</p>
//           <p>Punch In Time: {attendance.punchInTime}</p>
//           <p>Punch Out Time: {attendance.punchOutTime}</p>
//           <p>Attendance Mark: {attendance.attendmark}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AttendanceView;



// import React, { useState } from 'react';
// import axios from 'axios';

// function AttendanceView() {
//   const [userId, setUserId] = useState('');
//   const [attendances, setAttendances] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAttendances = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendances/user/${userId}`);
//       setAttendances(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <h1>View Attendance by User</h1>
//       <input
//         type="text"
//         placeholder="Enter user ID"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />
//       <button onClick={fetchAttendances}>Fetch Attendance</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <h2>Attendance Records:</h2>
//       <ul>
//         {attendances.map((attendance) => (
//           <li key={attendance._id}>
//             <p>User ID: {attendance.userId}</p>
//             <p>Name: {attendance.name}</p>
//             <p>Date: {new Date(attendance.date).toLocaleDateString()}</p>
//             <p>Punch In Time: {attendance.punchInTime}</p>
//             <p>Punch Out Time: {attendance.punchOutTime}</p>
//             <p>Attendance Mark: {attendance.attendmark}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AttendanceView;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input, Button, List, Typography, Space } from 'antd';

// const { Text } = Typography;

// function AttendanceView() {
//   const [userId, setUserId] = useState('');
//   const [attendances, setAttendances] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAttendances = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendances/user/${userId}`);
//       setAttendances(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>View Employee Attendance </h1>
//       <Space>
//         <Input
//           placeholder="Enter user ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <Button type="primary" onClick={fetchAttendances}>Fetch Attendance</Button>
//       </Space>
//       {error && <Text type="danger">{error}</Text>}
//       <h2>Attendance Records:</h2>
//       <List
//         dataSource={attendances}
//         renderItem={attendance => (
//           <List.Item key={attendance._id}>
//             <Space direction="vertical">
//               <Text>User ID: {attendance.userId}</Text>
//               <Text>Name: {attendance.name}</Text>
//               <Text>Date: {new Date(attendance.date).toLocaleDateString()}</Text>
//               <Text>Punch In Time: {attendance.punchInTime}</Text>
//               <Text>Punch Out Time: {attendance.punchOutTime}</Text>
//               <Text>Attendance Mark: {attendance.attendmark}</Text>
//             </Space>
//           </List.Item>
//         )}
//       />
//     </div>
//   );
// }

// export default AttendanceView;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input, Button, Card, Typography, Space } from 'antd';

// const { Text } = Typography;

// function AttendanceView() {
//   const [userId, setUserId] = useState('');
//   const [attendances, setAttendances] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAttendances = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendances/user/${userId}`);
//       setAttendances(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>View Employee Attendance</h1>
//       <Space>
//         <Input
//           placeholder="Enter user ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <Button type="primary" onClick={fetchAttendances}>
//           Fetch Attendance
//         </Button>
//       </Space>
//       {error && <Text type="danger">{error}</Text>}
//       <h2>Attendance Records:</h2>
//       <Space direction="vertical">
//         {attendances.map((attendance) => (
//           <Card key={attendance._id}>
//             <Text>User ID: {attendance.userId}</Text>
//             <Text>Name: {attendance.name}</Text>
//             <Text>Date: {new Date(attendance.date).toLocaleDateString()}</Text>
//             <Text>Punch In Time: {attendance.punchInTime}</Text>
//             <Text>Punch Out Time: {attendance.punchOutTime}</Text>
//             <Text>Attendance Mark: {attendance.attendmark}</Text>
//           </Card>
//         ))}
//       </Space>
//     </div>
//   );
// }

// export default AttendanceView;





import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, List, Typography, Space } from 'antd';
import './AttendanceView.css'; // Import your custom CSS file

const { Text } = Typography;

function AttendanceView() {
  const [userId, setUserId] = useState('');
  const [attendances, setAttendances] = useState([]);
  const [error, setError] = useState(null);

  const fetchAttendances = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/attendances/user/${userId}`);
      setAttendances(response.data);
    } catch (err) {
      setError(err.response.data.message || 'An error occurred');
    }
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-title">Employee Attendance Details</h1>
      <Space direction="vertical" className="input-space">
        <Input
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type="primary" onClick={fetchAttendances}>Fetch Attendance</Button>
      </Space>
      {error && <Text type="danger" className="error-text">{error}</Text>}
      <h2 className="attendance-records-title">Attendance Records:</h2>
      <List
        dataSource={attendances}
        renderItem={attendance => (
          <List.Item key={attendance._id} className="attendance-item">
            <Space direction="vertical">
              <Text strong>User ID: {attendance.userId}</Text>
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

export default AttendanceView;






// import React, { useState } from 'react';
// import axios from 'axios';
// import { Input, Button, Table, Typography, Space } from 'antd';
// import './AttendanceView.css'; // Import your custom CSS file

// const { Text } = Typography;

// function AttendanceView() {
//   const [userId, setUserId] = useState('');
//   const [attendances, setAttendances] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchAttendances = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8000/attendances/user/${userId}`);
//       setAttendances(response.data);
//     } catch (err) {
//       setError(err.response.data.message || 'An error occurred');
//     }
//   };

//   const columns = [
//     {
//       title: 'User ID',
//       dataIndex: 'userId',
//       key: 'userId',
//     },
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//       render: (text) => new Date(text).toLocaleDateString(),
//     },
//     {
//       title: 'Punch In Time',
//       dataIndex: 'punchInTime',
//       key: 'punchInTime',
//     },
//     {
//       title: 'Punch Out Time',
//       dataIndex: 'punchOutTime',
//       key: 'punchOutTime',
//     },
//     {
//       title: 'Attendance Mark',
//       dataIndex: 'attendmark',
//       key: 'attendmark',
//     },
//   ];

//   return (
//     <div className="attendance-container">
//       <h1 className="attendance-title">Employee Attendance Details</h1>
//       <Space direction="vertical" className="input-space">
//         <Input
//           placeholder="Enter user ID"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//         />
//         <Button type="primary" onClick={fetchAttendances}>
//           Fetch Attendance
//         </Button>
//       </Space>
//       {error && <Text type="danger" className="error-text">{error}</Text>}
//       <h2 className="attendance-records-title">Attendance Records:</h2>
//       <Table
//         dataSource={attendances}
//         columns={columns}
//         pagination={false}
//         rowKey="_id"
//         className="attendance-table"
//       />
//     </div>
//   );
// }

// export default AttendanceView;
