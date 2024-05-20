import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './viewleavereq.css'; // Import CSS file

const ViewLeaveReqall = () => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:8000/fetchallleaves";
        const response = await axios.get(url);
        setRecord(response.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchData();
  }, []);

  const approvedLeave = (userId, leaveId) => {
    const url = `http://localhost:8000/approveLeave/${leaveId}`;
    axios.put(url, { userId })
      .then(response => {
        console.log('Leave approved successfully:', response.data);
        // You can update the UI or perform other actions upon successful approval
      })
      .catch(error => {
        console.error('Error approving leave:', error);
        // Handle errors if the approval request fails
      });
  }

  return (
    <div className="container">
      <div className="leave-item leave-heading">
        <div className="leave-details">
          <div>EmployeeID</div>
          <div>Name</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Reason</div>
          <div>Comment</div>
        </div>
      </div>
      {record.map((leave) => (
        <div key={leave._id} className="leave-item">
          <div className="leave-details">
            <div>{leave.userId}</div>
            <div>{leave.userName}</div>
            <div>{leave.startDate.split('T')[0]}</div>
            <div>{leave.endDate.split('T')[0]}</div>
            <div>{leave.reason.split(' ').slice(0, 10).join(' ')}...</div>
            <div>{leave.comment.split(' ').slice(0, 10).join(' ')}...</div>
            {/* <Button onClick={() => approvedLeave(leave.userId, leave._id)}>Approve</Button> */}
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ViewLeaveReqall;
