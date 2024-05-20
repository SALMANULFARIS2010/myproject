// import logo from './logo.svg';
import './App.css';


import { Route,Routes } from 'react-router-dom';
import Signin from './components/user/signin';
import SignUp from './components/user/signup';
import Emppage from './components/user/emppage';
import Empheader from './components/user/empheader';
import Adminlogin from './components/adminlogin';
import Home from './components/user/home';
import Webheader from './components/user/webheader';
import Hrsignin from './components/user/hrsignin';
import Hrsignup from './components/user/hrsignup';
import Profile from './components/user/profile';
import Adminheader from './components/user/adminheader';
import Adminpage from './components/user/adminpage';
import Admindash from './components/admindash';
import Hrheader from './components/user/hrheader';
import Hrpage from './components/user/hrpage';
import AboutUs from './components/user/aboutus';
import AddAttentance from  './components/user/addattentance';
import ManageSalary from './components/user/managesalary';
import ViewAttendanceEmp from './components/user/viewattentanceemp'
import ApplyLeaveForm from './components/user/applyleave'
import ViewEmployee from './components/viewemployee';
//  import EmployeePerformance from './components/user/addperformance'
import EmployeeAttendanceall from './components/user/viewallempattendance';
import ViewLeaveReqall from './components/user/viewleaves'
import EmployeePerformance from './components/user/addperformance';


// //import Hrdash from './components/user/hrdash';





function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Signup" element={<SignUp/>}/> 
      <Route path='/emppage/*' element={<Emppage/>}/>
      <Route path='/empheader' element={< Empheader/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/webheader' element={<Webheader/>}/>
      <Route path='/hrsignup' element={<Hrsignup/>}/>
      <Route path='/hrsignin' element={<Hrsignin/>}/>
      <Route path='/adminheader' element={<Adminheader/>}/>
      <Route path='/adminpage/*' element={<Adminpage/>}/>
      <Route path='/admindash' element={<Admindash/>}/>
      <Route path='/hrheader' element={<Hrheader/>}/>
      <Route path='/hrpage/*' element={<Hrpage/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/addattentance' element={<AddAttentance/>}/>
    <Route path='/managesalary' element={<ManageSalary/>}/>
    <Route path='/viewattentanceemp' element={<ViewAttendanceEmp/>}/>
    <Route path='/applyleave' element={<ApplyLeaveForm/>}/>
   <Route path='/viewemployee' element={<ViewEmployee/>}/>
{/* <Route path='/addperformance' element={<EmployeePerformance/>}/> */}
<Route path='/viewallempattendance' element={<EmployeeAttendanceall/>}/>
<Route path='/viewleaves' element={<ViewLeaveReqall/>}/>
{/* <Route path='/addperformance' element={<EmployeePerformance/>}/> */}

   {/* /  <Route path='/hrdash' element={<Hrdash/>}/> */}
 
      
    </Routes>
    
    </>
  );
}

export default App;
