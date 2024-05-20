// // LoginForm.js

// import React, { useState } from 'react';
// import { Button,Container,Row,Col,Form } from 'react-bootstrap';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from 'react-router-dom';
// import AXIOS from 'axios';
// export default function Adminlogin(){

//   const[admindata,setData]=useState({username:"",password:""});
//   const nav=useNavigate();

//   const setValue = (field, value) => {
//     setData({ ...admindata, [field]: value });
//   }


//   const handlerSubmit=(e)=>{
//     e.preventDefault();
//     console.log("submitted");
//     if(!admindata.username || !admindata.password){
//       alert("All fields are required")
//     }else{
//       const url= "http://localhost:8000/adminlogin";
//       AXIOS.post(url, admindata).then((response)=>{
//         if(response.data.status==1){
//           alert(response.data.msg);
//           nav('/adminpage')
//          // nav('adminpage')
//         }
//         else{
//           alert(response.data.msg);
//         }

//   })
// }
//   }


// return(
//   <>
//   <Container>
  
//     <Row>
//     <center><h1>Admin Login</h1></center> 
//       <Col>
//       <Form onSubmit={handlerSubmit}>
      
//         <Form.Group>
//           <Form.Label>USER NAME:</Form.Label>
//           <Form.Control type="text"name="username"placeholder= "Enter username" 
//            value={admindata.username} onChange={(e)=>{setValue(e.target.name,e.target.value)}}/>
//         </Form.Group>
        
//         <Form.Group>
//           <Form.Label>PASSWORD:</Form.Label>
//           <Form.Control type="text"name="password"
//            value={admindata.password} onChange={(e)=>{setValue(e.target.name,e.target.value)}}/>
//         </Form.Group>

//         <Form.Group>
//         <Button type="submit">Submit</Button>
//         </Form.Group>



//         </Form>
      
//       </Col>
    

//     </Row>
   
//   </Container>


//   </>
// )
// }


// import React, { useState } from 'react';
// import { Button, Container, Row, Col, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import './adminlogin.css'

// export default function Adminlogin() {
//   const [admindata, setData] = useState({ username: "", password: "" });
//   const [loading, setLoading] = useState(false); // State for loading state
//   const nav = useNavigate();

//   const setValue = (field, value) => {
//     setData({ ...admindata, [field]: value });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state to true on form submission
//     console.log("submitted");
//     if (!admindata.username || !admindata.password) {
//       alert("All fields are required");
//       setLoading(false); // Reset loading state
//     } else {
//       const url = "http://localhost:8000/adminlogin";
//       axios.post(url, admindata).then((response) => {
//         setLoading(false); // Reset loading state after request completes
//         if (response.data.status === 1) {
//           alert(response.data.msg);
//           nav('/adminpage');
//         } else {
//           alert(response.data.msg);
//         }
//       }).catch(error => {
//         setLoading(false); // Reset loading state on error
//         console.error("Error:", error);
//         alert("An error occurred. Please try again.");
//       });
//     }
//   }

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-3 col-md-2"></div>
//         <div className="col-lg-6 col-md-8 login-box">
//           <div className="col-lg-12 login-key">
//             <i className="fa fa-key" aria-hidden="true"></i>
//           </div>
//           <div className="col-lg-12 login-title">
//             ADMIN PANEL
//           </div>
//           <div className="col-lg-12 login-form">
//             <Form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label className="form-control-label">USERNAME</label>
//                 <input type="text" className="form-control" name="username"
//                   value={admindata.username} onChange={(e) => setValue(e.target.name, e.target.value)} />
//               </div>
//               <div className="form-group">
//                 <label className="form-control-label">PASSWORD</label>
//                 <input type="password" className="form-control" name="password"
//                   value={admindata.password} onChange={(e) => setValue(e.target.name, e.target.value)} />
//               </div>
//               <div className="col-lg-12 loginbttm">
//                 <div className="col-lg-6 login-btm login-text">
//                   {/* Error Message */}
//                 </div>
//                 <div className="col-lg-6 login-btm login-button">
//                   <Button type="submit" className="btn btn-outline-primary" disabled={loading}>
//                     {loading ? 'Loading...' : 'LOGIN'}
//                   </Button>
//                 </div>
//               </div>
//             </Form>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-2"></div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './adminlogin.css'; // Assuming this file contains your custom styles

const Adminlogin = () => {
  const [admindata, setData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const setValue = (field, value) => {
    setData({ ...admindata, [field]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("submitted");
    if (!admindata.username || !admindata.password) {
      alert("All fields are required");
      setLoading(false);
    } else {
      const url = "http://localhost:8000/adminlogin";
      axios.post(url, admindata).then((response) => {
        setLoading(false);
        if (response.data.status === 1) {
          alert(response.data.msg);
          nav('/adminpage');
        } else {
          alert(response.data.msg);
        }
      }).catch(error => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
    }
  }

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <Card className="bg-dark text-white" style={{ borderRadius: '1rem' }}>
              <Card.Body className="p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase"> Admin Login</h2>
                  <p className="text-white-50 mb-5">Please enter your username and password!</p>

                  <Form onSubmit={handleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input type="text" id="username" className="form-control form-control-lg"
                        value={admindata.username} onChange={(e) => setValue('username', e.target.value)} />
                      <label className="form-label" htmlFor="username">Username</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="password" className="form-control form-control-lg"
                        value={admindata.password} onChange={(e) => setValue('password', e.target.value)} />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <Button type="submit" className="btn btn-outline-light btn-lg px-5" disabled={loading}>
                      {loading ? 'Loading...' : 'Login'}
                    </Button>
                  </Form>

                  {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                    <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                  </div> */}

                </div>

                <div>
                  {/* <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p> */}
                </div>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adminlogin;
