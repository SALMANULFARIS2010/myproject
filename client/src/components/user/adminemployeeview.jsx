import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import axios from 'axios';

export const  EmployeeAttendanceViewByAdmin = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/attendances'); // Adjust the endpoint accordingly
      setAttendanceData(response.data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const columns = [
    {
      title: 'User ID',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Punch In Time',
      dataIndex: 'punchInTime',
      key: 'punchInTime',
    },
    {
      title: 'Punch Out Time',
      dataIndex: 'punchOutTime',
      key: 'punchOutTime',
    },
    {
      title: 'Attendance Mark',
      dataIndex: 'attendmark',
      key: 'attendmark',
    },
  ];

  return (
    <div>
      <h1>Attendance View</h1>
      <Table dataSource={attendanceData} columns={columns} />
    </div>
  );
};


