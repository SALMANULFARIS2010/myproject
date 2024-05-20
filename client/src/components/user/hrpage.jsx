import {Container, Row,Col,Nav } from "react-bootstrap";
import Empheader from "./empheader";
import { Routes,Route } from "react-router-dom";
import Profile from "./profile";
import Usersearch from "./usersearch";
import HRProfile from "./hrprofile";
import ViewLeaveReq from "./viewleavereq";
import PerformanceForm from "./PerformanceForm";
import SalaryForm from "./SalaryForm";
import PerformanceChart from "./chartperformance";
import AttendanceTable from "./viewattentanceemp";



export default function Hrpage(){
  return(
    <>
    <Empheader/>

    <Container fluid>
      <Row>
        <Col lg={2} className="bg-warning"style={{height:"100vh"}}>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/hrpage/hrprofile">Profile</Nav.Link>
      <Nav.Link href="/hrpage/usersearch">View Employee</Nav.Link>
      <Nav.Link href="/hrpage/viewattendance">View Attentance</Nav.Link>
      <Nav.Link href="/hrpage/viewleavereq">View Leave Request</Nav.Link>
      {/* <Nav.Link href="/hrpage/addperformance">Add performance</Nav.Link> */}
      {/* <Nav.Link href="/hrpage/addsalary">Add Salary</Nav.Link> */}
      <Nav.Link href="/hrpage/performancechart">Performance in Chart</Nav.Link>
      <Nav.Link href="/signin">Log out</Nav.Link>
      {/* <Nav.Link href="link-2">Link</Nav.Link>
      <Nav.Link href="disabled" disabled>
        Disabled
      </Nav.Link> */}
    </Nav>
        </Col>
        <Col lg={10}>
        <Routes>
          <Route path="/hrprofile" element={<HRProfile/>}></Route>
          <Route path="/usersearch" element={<Usersearch/>}></Route>
          <Route path="/viewleavereq" element={<ViewLeaveReq/>}></Route>
          <Route path="/addperformance/:id" element={<PerformanceForm/>}></Route>
          <Route path="/addsalary/:id" element={<SalaryForm/>}></Route>
          <Route path="/performancechart" element={<PerformanceChart/>}></Route>
          <Route path="/viewattendance"  element={<AttendanceTable/>}></Route>
          
          </Routes>         
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
