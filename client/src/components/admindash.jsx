// import {useState, useEffect } from "react";
// import Axios from 'axios';
// import { Button } from 'react-bootstrap';
// import { Routes,Route } from "react-router-dom";
// import Usersearch from "./user/usersearch";
// import{Table} from 'react-bootstrap';



// export  default function Admindash(){
//     const[record,setRecord]=useState([])
//     useEffect(()=>{
//         const url="http://localhost:8000/fetchAllemp";
//         Axios.get(url).then((res)=>{
//            setRecord(res.data)
//             console.log("data reached")

//         })
//     },)

//     //delete
//     const Deleteuser=(userid)=>{
//         let ans=window.confirm("do you want to delete")
//         if(ans){
//             const url=`http://localhost:8000/deleteuser/${userid}`;
//            Axios.get(url).then((res)=>{
//                 alert(res.data)

//         })
//         }else{
//             alert("deletion cancelled")
//         }
//     }

//     return(
//         <>
//        <center><h1>ADMIN DASHBOARD</h1></center> 
      
     
//        {/* <Routes>
//        <Route path="/usersearch" element={<Usersearch/>}></Route>
//        </Routes> */}
      
//         <Table>
//                 <thead>
//                     <tr>
//                         <th>#</th> 
//                         <th>Name</th> 
//                         <th>Email</th> 
//                         <th>Password</th>
//                         <th>idcard</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         record.map((ls)=>{
//                            return <tr key={ls._id}>
//                                    <td>#</td>
//                                   <td>
//                                     {ls.fullname}
//                                   </td>
//                                   <td>
//                                     {ls.email}
//                                   </td>
//                                   <td>
//                                     {ls.password}
//                                   </td>
//                                   <td>
//                                     <img src={ls.image} style={{width:"100px",height:"100px"}}/>
//                                   </td>
//                                   <Button type="button"  variant="danger" onClick={()=>{Deleteuser(ls._id)}}>DELETE</Button>
//                            </tr>
//                         })
//                     }
//                 </tbody>
//             </Table>
           
//         </>
    
//     )
    


// }








import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Button, Table } from 'react-bootstrap';

export default function Admindash() {
    const [record, setRecord] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8000/fetchAllemp";
        Axios.get(url).then((res) => {
            setRecord(res.data);
            console.log("data reached");
        });
    }, []);

    // Delete user
    const Deleteuser = (userid) => {
        let ans = window.confirm("Do you want to delete?");
        if (ans) {
            const url = `http://localhost:8000/deleteuser/${userid}`;
            Axios.get(url).then((res) => {
                alert(res.data);
            });
        } else {
            alert("Deletion cancelled");
        }
    };

    return (
        <div className="container mt-4">
            <center><h1>ADMIN DASHBOARD</h1></center>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>ID Card</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record.map((ls, index) => (
                        <tr key={ls._id}>
                            <td>{index + 1}</td>
                            <td>{ls.fullname}</td>
                            <td>{ls.email}</td>
                            <td>{ls.password}</td>
                            <td>
                                <img src={ls.image} alt={ls.fullname} style={{ width: "100px", height: "100px" }} />
                            </td>
                            <td>
                                <Button variant="danger" onClick={() => Deleteuser(ls._id)}>DELETE</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
