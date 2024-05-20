import {Container, Row,Col,Nav } from "react-bootstrap";
import Empheader from "./empheader";
import { Routes,Route } from "react-router-dom";
import Profile from "./profile";
import Usersearch from "./usersearch";
import ViewAttendanceEmp from "./viewattentanceemp";
import Adminheader from "./addattentance";
import ViewLeave from "./viewleave";
// import PerformanceChart from "./PerformanceChart";
// import BarChart from "./BarChart";
import Perfomance from "./Perfomance";
import SalaryView from "../SalaryView";
import EmpPerformanceChart from "./empchartperformance";
import AttendanceTable from "./viewattentanceemp";
// import ViewLeave from "./viewleave";



export default function Emppage(){
  return(
    <>
    <Empheader/>

    <Container fluid>
      <Row>
        <Col lg={2} className="bg-warning"style={{height:"100vh"}}>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/emppage">Home</Nav.Link>
      <Nav.Link href="/emppage/profile">Profile</Nav.Link>
      {/* <Nav.Link href="/emppage/usersearch">Usersearch</Nav.Link> */}
      <Nav.Link href="/emppage/viewattendance">View Attentance</Nav.Link>
      <Nav.Link href="/applyleave">Apply Leave</Nav.Link>
      <Nav.Link href="/emppage/viewleave">View Leave</Nav.Link>
      {/* <Nav.Link href="/approveleave">Approve leave</Nav.Link> */}
      {/* <Nav.Link href="/emppage/perfomance">view performance</Nav.Link> */}
      {/* <Nav.Link href="/emppage/performance">View Performance</Nav.Link> */}
      <Nav.Link href="/emppage/empperformance/:id">View Performance</Nav.Link>
      <Nav.Link href="/emppage/salaryview">View Salary</Nav.Link>
      <Nav.Link href="/emppage/checkin">Check in</Nav.Link>
      <Nav.Link href="/signin">Log out</Nav.Link>
      {/* <Nav.Link href="link-2">Link</Nav.Link>
      <Nav.Link href="disabled" disabled>
        Disabled
      </Nav.Link> */}
    </Nav>
        </Col>
        <Col lg={10}>
        
        <Routes>
        <Route path="/*" element={<Adminheader/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/usersearch" element={<Usersearch/>}></Route>
          <Route path="/viewleave" element={<ViewLeave/>}></Route>
          <Route path="/perfomance" element={<Perfomance/>}></Route>
          {/* <Route path="/performance" element={<PerformanceChart/>}></Route> */}
          {/* <Route path="/performance" element={<BarChart/>}></Route> */}
          {/* <Route path="/checkin" element={</>}></Route> */}
          <Route path="/salaryview" element={<SalaryView/>}></Route>
          <Route path="/empperformance/:id"  element={<EmpPerformanceChart/>}></Route>
          <Route path="/viewattendance"  element={<AttendanceTable/>}></Route>

          </Routes>         
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
