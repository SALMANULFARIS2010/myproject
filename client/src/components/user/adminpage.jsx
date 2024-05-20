import {Container, Row,Col,Nav } from "react-bootstrap";
import Empheader from "./empheader";
import { Routes,Route } from "react-router-dom";
// import Profile from "./profile";
import Usersearch from "./usersearch";
import HRProfile from "./hrprofile";
import ViewLeaveReq from "./viewleavereq";
import PerformanceForm from "./PerformanceForm";
import SalaryForm from "./SalaryForm";
import PerformanceChart from "./chartperformance";
import AttendanceTable from "./viewattentanceemp";


// import Usersearch from "./usersearch";
// import AttendanceViews from "./viewallempattendance";
// import AttendanceView from "./viewattentanceemp";
// import AttendanceTable from "./viewattentanceemp";
import {EmployeeAttendanceViewByAdmin} from "./adminemployeeview";
import ViewLeaveReqall from "./viewleaves";
//import PerformanceChart from "./chartperformance";
// import ViewLeaveReqall from "./viewleaves";



export default function adminpage(){
  return(
    <>
    <Empheader/>

    <Container fluid>
      <Row>
        <Col lg={2} className="bg-warning"style={{height:"100vh"}}>
        <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      {/* <Nav.Link href="/hrprofile">Profile</Nav.Link> */}
      {/* <Nav.Link href="/adminpage/usersearch">View Employee</Nav.Link> */}
      <Nav.Link href="/adminpage/viewattendance">View All Attentance By ID</Nav.Link>
      {/* <Nav.Link href="/adminpage/viewleavereq">View Leave Request</Nav.Link> */}
      {/* <Nav.Link href="/hrpage/addperformance">Add performance</Nav.Link> */}
      {/* <Nav.Link href="/hrpage/addsalary">Add Salary</Nav.Link> */}
      <Nav.Link href="/adminpage/performancechart">Performance in Chart</Nav.Link>


      <Nav.Link href="/admindash">Manage Employee</Nav.Link>
      <Nav.Link href="/adminpage/viewemployeeattendance">View Attentance</Nav.Link>
       <Nav.Link href="/viewemployee">Employee List</Nav.Link>
        <Nav.Link href="/adminpage/fetchallleaves">View Leave request</Nav.Link>
         {/* <Nav.Link href="/adminpage/empperformance/:id">View performance</Nav.Link> */}
         {/* <Nav.Link href="/adminpage/viewleaves">View leave request</Nav.Link> */}


      <Nav.Link href="/signin">Log out</Nav.Link>
      {/* <Nav.Link href="link-2">Link</Nav.Link>
      <Nav.Link href="disabled" disabled>
        Disabled
      </Nav.Link> */}
    </Nav>
        </Col>
        <Col lg={10}>
        <Routes>
          {/* <Route path="/hrprofile" element={<HRProfile/>}></Route> */}
          <Route path="/usersearch" element={<Usersearch/>}></Route>
          <Route path="/viewleavereq" element={<ViewLeaveReq/>}></Route>
          <Route path="/addperformance/:id" element={<PerformanceForm/>}></Route>
          <Route path="/addsalary/:id" element={<SalaryForm/>}></Route>
          <Route path="/performancechart" element={<PerformanceChart/>}></Route>
          <Route path="/viewattendance"  element={<AttendanceTable/>}></Route>
          <Route path="/fetchallleaves"  element={<ViewLeaveReqall/>}></Route>

          
          <Route exact path="/viewemployeeattendance"  element={<EmployeeAttendanceViewByAdmin/>}></Route>
          {/* <Route path="/empperformance/:id" element={<PerformanceChart/>}></Route> */}

          
          </Routes>         
        </Col>
      </Row>
    </Container>
    
    </>
  )
}
