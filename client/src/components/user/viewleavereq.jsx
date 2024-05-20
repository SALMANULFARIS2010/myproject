// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import axios from 'axios'; // Use lowercase 'axios'
// import './signin.css';

// const ViewLeaveReq = () => {
//   const [record, setRecord] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = "http://localhost:8000/fetchallleaves";
//         const response = await axios.get(url);
//         setRecord(response.data);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchData(); // Call fetchData function inside useEffect

//     // Add an empty dependency array to run effect only once
//   }, []);

//   const approvedLeave = (userId, leaveId) => {
    
//     const url = `http://localhost:8000/approveLeave/${leaveId}`;
//     axios.put(url, { userId })
//       .then(response => {
//         console.log('Leave approved successfully:', response.data);
//         // You can update the UI or perform other actions upon successful approval
//       })
//       .catch(error => {
//         console.error('Error approving leave:', error);
//         // Handle errors if the approval request fails
//       });
//   }

//   return (
//     <div>
//       {record.map((leave) => (
//         <div key={leave._id}>
//           <div style={{ display: 'flex', gap: "40px" }}>
//             <div>{leave.userId}</div>
//             <div>{leave.userName}</div>
//             <div>{leave.startDate.split('T')[0]}</div>
//             <div>{leave.endDate.split('T')[0]}</div>
//             <div>{leave.reason}</div>
//             <div>{leave.comment}</div>
//             <Button onClick={() => approvedLeave(leave.userId, leave._id)}>Approve</Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewLeaveReq;






//



import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './viewleavereq.css'; // Import CSS file

const ViewLeaveReq = () => {
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
        window.location.reload();
      })
      .catch(error => {
        console.error('Error approving leave:', error);
        // Handle errors if the approval request fails
      });
  }
  const rejectLeave = (userId, leaveId) => {
    const url = `http://localhost:8000/rejectLeave/${leaveId}`;
    axios.put(url, { userId })
      .then(response => {
        console.log('Leave approved successfully:', response.data);
        // You can update the UI or perform other actions upon successful approval
        if(response.data.status==1){
          alert(response.data.message);
        window.location.reload();
      }
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
            <Button onClick={() => approvedLeave(leave.userId, leave._id)}>Approve</Button>
            <Button onClick={() => rejectLeave(leave.userId, leave._id)}>Reject</Button>
          </div>
        </div>
      ))}
    </div>
  );
  
};

export default ViewLeaveReq;



//

// import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import './viewleavereq.css'; // Import CSS file

// const ViewLeaveReq = () => {
//   const [record, setRecord] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = "http://localhost:8000/fetchallleaves";
//         const response = await axios.get(url);
//         setRecord(response.data);
//       } catch (error) {
//         console.error('Error fetching leave requests:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const approvedLeave = (userId, leaveId) => {
//     const url = `http://localhost:8000/approveLeave/${leaveId}`;
//     axios.put(url, { userId })
//       .then(response => {
//         console.log('Leave approved successfully:', response.data);
//         // You can update the UI or perform other actions upon successful approval
//       })
//       .catch(error => {
//         console.error('Error approving leave:', error);
//       });
//   }

//   const rejectedLeave = (leaveId) => {
//     const url = `http://localhost:8000/rejectLeave/${leaveId}`;
//     axios.put(url)
//       .then(response => {
//         console.log('Leave rejected successfully:', response.data);
//         // You can update the UI or perform other actions upon successful rejection
//       })
//       .catch(error => {
//         console.error('Error rejecting leave:', error);
//       });
//   }

//   return (
//     <div className="container">
//       <div className="leave-item leave-heading">
//         <div className="leave-details">
//           <div>EmployeeID</div>
//           <div>Name</div>
//           <div>Start Date</div>
//           <div>End Date</div>
//           <div>Reason</div>
//           <div>Comment</div>
//           <div>Action</div>
//         </div>
//       </div>
//       {record.map((leave) => (
//         <div key={leave._id} className="leave-item">
//           <div className="leave-details">
//             <div>{leave.userId}</div>
//             <div>{leave.userName}</div>
//             <div>{leave.startDate.split('T')[0]}</div>
//             <div>{leave.endDate.split('T')[0]}</div>
//             <div>{leave.reason.split(' ').slice(0, 10).join(' ')}...</div>
//             <div>{leave.comment.split(' ').slice(0, 10).join(' ')}...</div>
//             <div>
//               <Button onClick={() => approvedLeave(leave.userId, leave._id)}>Approve</Button>
//               <Button variant="danger" onClick={() => rejectedLeave(leave._id)}>Reject</Button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewLeaveReq;
