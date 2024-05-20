// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'; // Import Axios for making HTTP requests

// const ApplyLeaveForm = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reason, setReason] = useState('');
//   const [comment, setComment] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userId = sessionStorage.getItem('id');

//     try {
//       const response = await axios.post('http://localhost:8000/submitleave', {
//         userId,
//         startDate,
//         endDate,
//         reason,
//         comment,
//       });

//       console.log(response.data); // Log the response from the server
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       console.error('Error submitting leave application:', error);
//       setError('An error occurred while submitting the leave application.');
//     }
//     window.location.reload();
//   };

//   return (
//     <div className="container mt-5" style={{ width: '600px', height: '500px' }}>
//       <h2>Apply Leave</h2>
//       {error && <div className="alert alert-danger">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>End Date:</label>
//           <input
//             type="date"
//             name="endDate"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Reason:</label>
//           <input
//             type="text"
//             name="reason"
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Comments:</label>
//           <textarea
//             value={comment}
//             name="comment"
//             onChange={(e) => setComment(e.target.value)}
//             className="form-control"
//             rows="3"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ApplyLeaveForm;






//


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import Axios for making HTTP requests
import './applyleave.css'; // Import custom CSS for styling

const ApplyLeaveForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('id');

    try {
      const response = await axios.post('http://localhost:8000/submitleave', {
        userId,
        startDate,
        endDate,
        reason,
        comment,
      });

      console.log(response.data); // Log the response from the server
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error submitting leave application:', error);
      setError('An error occurred while submitting the leave application.');
    }
    window.location.reload();
  };

  return (
    <div className="container mt-5 apply-leave-form">
      <h2>Apply Leave</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Reason:</label>
          <input
            type="text"
            name="reason"
            value={reason.slice(0, 10)}
            onChange={(e) => setReason(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            value={comment.slice(0, 10)}
            name="comment"
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
  

  
};

export default ApplyLeaveForm;
