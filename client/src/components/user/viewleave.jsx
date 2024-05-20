// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import axios from 'axios'; // Use lowercase 'axios'
// import './signin.css';

// const ViewLeave = () => {
//     const [record,setRecord] = useState([]);
//     const userId=sessionStorage.getItem('id');
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const url = `http://localhost:8000/viewapprovedleaves/${userId}`;
//             const response = await axios.get(url);
//             setRecord(response.data);
//           } catch (error) {
//             console.error('Error fetching leave requests:', error);
//           }
//         };
    
//         fetchData(); // Call fetchData function inside useEffect
    
//         // Add an empty dependency array to run effect only once
//       }, []);
  

//   return (
//     <div>
//   {record.map((leave) => (
//         <div key={leave._id}>
//           <div style={{ display: 'flex', gap: "40px" }}>
//             <div>{leave.userId}</div>
//             <div>{leave.userName}</div>
//             <div>{leave.startDate.split('T')[0]}</div>
//             <div>{leave.endDate.split('T')[0]}</div>
//             <div>{leave.reason}</div>
//             <div>{leave.comment}</div>
            
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ViewLeave;




//


import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import styles from './viewleave.module.css'; // Import CSS module

const ViewLeave = () => {
  const [record, setRecord] = useState([]);
  const userId = sessionStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:8000/viewapprovedleaves/${userId}`;
        const response = await axios.get(url);
        setRecord(response.data);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
    <h1 className={`my-4 ${styles['heading-text']}`}>Approved Leave Requests</h1>

 {/* Add heading here */}
      <div className={styles['card-c']}>
        {record.map((leave) => (
          <Card key={leave._id} className={styles['card']}>
            <Card.Body>
              <Card.Title className={styles['card-header']}>{leave.userName}</Card.Title>
              <Card.Text className={styles['card-content']}>
                <strong>User ID:</strong> {leave.userId}
                <br />
                <strong>Start Date:</strong> {leave.startDate.split('T')[0]}
                <br />
                <strong>End Date:</strong> {leave.endDate.split('T')[0]}
                <br />
                <strong>Reason:</strong> {leave.reason}
                <br />
                <strong>Comment:</strong> {leave.comment}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ViewLeave;

 