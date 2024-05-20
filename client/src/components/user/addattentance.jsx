// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import ApplyLeaveForm from './applyleave';
// import { Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';

// const API_URL = 'http://localhost:8000'; // Assuming your backend is running on port 8000

// export default function Adminheader() {
//   const [isPunchedIn, setIsPunchedIn] = useState(true);
//   const [attendance,setAtt]=useState(0)

//   const handlePunchIn = () => {
//     axios.post(`${API_URL}/punchIn`, { userId: sessionStorage.getItem('id') })
//       .then((response) => {
//         if(response.data.status==1){
//           alert(response.data.msg)
//           setAtt(response.data.att)
//         }else{
//           setAtt(0)
          
//         }
       
//       })
//       .catch((error) => {
//         console.error('Error marking attendance:', error);
//       });
//   };

//   const handlePunchOut = () => {
//     axios.post(`${API_URL}/punchOut`, { userId: sessionStorage.getItem('id') })
//       .then((response) => {
//         if (response.data.success) {
//           setIsPunchedIn(false);
//         } else {
//           console.error('Failed to mark attendance');
//         }
//       })
//       .catch((error) => {
//         console.error('Error marking attendance:', error);
//       });
//   };

//   return (
//     <>
//     <div>
//       {attendance==0?
//         <Button style={{width:"150px",backgroundColor:"#83f28f",color:"white",fontWeight:"bold",border:"none",height:"40px"}}onClick={handlePunchIn}>Punch In</Button>
//         :"attendance marked for today"
//       }
//       {/* onClick={handlePunchIn} */}
//       {/* {isPunchedIn && (
//         <Button style={{width:"150px",backgroundColor:"#DC143c",color:"white",fontWeight:"bold",border:"none",height:"40px"}} onClick={handlePunchOut}>Punch Out</Button>
//       )} */}
//       </div>
//       <div style={{marginTop:"20px"}}>
//       <Link to="/emppage/applyleave">
//       <Button style={{width:"150px",backgroundColor:"#83f28f",color:"white",fontWeight:"bold",border:"none",height:"40px"}}>Apply FOr Leave</Button></Link>
//       </div>
//       <div >
//       <Routes>
        
//         <Route path="/applyleave" element={<ApplyLeaveForm/>}></Route>
          

//           </Routes>  
         

//       </div>
//     </>
//   );
// }






import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApplyLeaveForm from './applyleave';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

const API_URL = 'http://localhost:8000'; // Assuming your backend is running on port 8000

export default function Adminheader() {
  const [isPunchedIn, setIsPunchedIn] = useState(false);

  const handlePunchIn = () => {
    axios.post(`${API_URL}/punchIn`, { userId: sessionStorage.getItem('id') })
      .then((response) => {
        if(response.data.status === 0){
          alert(response.data.msg)
        }
        if (response.data.success) {
          setIsPunchedIn(true);
        } else {
          console.error('Failed to mark attendance');
        }
      })
      .catch((error) => {
        console.error('Error marking attendance:', error);
      });
  };

  const handlePunchOut = () => {
    axios.post(`${API_URL}/punchOut`, { userId: sessionStorage.getItem('id') })
      .then((response) => {
        if (response.data.success) {
          setIsPunchedIn(false);
        } else {
          console.error('Failed to mark attendance');
        }
      })
      .catch((error) => {
        console.error('Error marking attendance:', error);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        {!isPunchedIn && (
          <Button
            style={{ width: "150px", backgroundColor: "#83f28f", color: "white", fontWeight: "bold", border: "none", height: "40px" }}
            onClick={handlePunchIn}
          >
            Punch In
          </Button>
        )}
        {isPunchedIn && (
          <Button
            style={{ width: "150px", backgroundColor: "#DC143c", color: "white", fontWeight: "bold", border: "none", height: "40px" }}
            onClick={handlePunchOut}
          >
            Punch Out
          </Button>
        )}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/emppage/applyleave">
          <Button
            style={{ width: "150px", backgroundColor: "#83f28f", color: "white", fontWeight: "bold", border: "none", height: "40px" }}
          >
            Apply For Leave
          </Button>
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/emppage/applyleave" element={<ApplyLeaveForm />} />
        </Routes>
      </div>
    </div>
  );
}
