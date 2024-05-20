// import{useState,useEffect} from 'react';
// import {Container,Row,Col,Form, Table,Button} from 'react-bootstrap'
// import AXIOS from 'axios'
// //import { MdDelete } from "react-icons/md";
// export default function Usersearch(){
//     const [uname,setUname]=useState("");
//     const [record,setRecord]=useState([]);

//     useEffect(()=>{
//         const url="http://localhost:8000/fetchAllemp"
//      AXIOS.get(url).then((res)=>{
//             setRecord(res.data)
//         })
//     },);
// //delete
//     const Deleteuser=(userid)=>{
//         let ans=window.confirm("do you want to delete")
//         if(ans){
//             const url=`http://localhost:8000/deleteuser/${userid}`;
//             AXIOS.get(url).then((res)=>{
//                 alert(res.data)

//         })
//         }else{
//             alert("deletion cancelled")
//         }
//     }
//     return(
//         <>
//         <Container>
//             <Row>
//                 <Col>
//                  <Form.Control type="text"
//                  onChange={(e)=>setUname(e.target.value)}
                 
//                  placeholder='search by name' required/> 

                 
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//             <Table>
//                 <thead>
//                     <tr>
//          <th>slno</th> <th>Name</th> <th>Email</th> <th>Course</th><th>Action</th>
//                     </tr>
//                 </thead>
//               <tbody>
//                 { 
//                  uname!==""?
//                     record
//                     .filter((ls)=>{return ls.fullname.match(uname)})
//                     .map((ls,index)=>{
//                         return(
//                             <tr key={ls._id}>
//                                 <td>
//                                     {index+1}
//                                 </td>
//                                 <td>
//                                     {ls.fullname}
//                                 </td>
//                                 <td>
//                                     {ls.email}
//                                 </td>
//                                 <td>
//                                     {ls.crs}
//                                 </td>
//                             </tr>
//                         )

//                     })
//                     :
//                     record
//                     .map((ls,index)=>{
//                         return(
//                             <tr key={ls._id}>
//                                 <td>
//                                     {index+1}
//                                 </td>
//                                 <td>
//                                     {ls.fullname}
//                                 </td>
//                                 <td>
//                                     {ls.email}
//                                 </td>
//                                 <td>
//                                     {ls.crs}
//                                 </td>
//                                 <Button type="button"  variant="danger" onClick={()=>{Deleteuser(ls._id)}}>DELETE</Button>
//                             </tr>

//                         )

//                     })
//                 }
//               </tbody>


//             </Table>

//             </Col>
//             </Row>
//         </Container>
        
//         </>
//     )
//     }





















//
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import AXIOS from 'axios';
import './Usersearch.css' 

export default function Usersearch() {
    const [uname, setUname] = useState("");
    const [record, setRecord] = useState([]);

    useEffect(() => {
        const url = "http://localhost:8000/fetchAllemp";
        AXIOS.get(url).then((res) => {
            setRecord(res.data);
        });
    }, []);

    // Delete user
    const Deleteuser = (userid) => {
        let ans = window.confirm("Do you want to delete?");
        if (ans) {
            const url = `http://localhost:8000/deleteuser/${userid}`;
            AXIOS.get(url).then((res) => {
                alert(res.data);
            });
        } else {
            alert("Deletion cancelled");
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            onChange={(e) => setUname(e.target.value)}
                            placeholder='search by name'
                            required
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>slno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    uname !== "" ?
                                        record
                                            .filter((ls) => { return ls.fullname.match(uname) })
                                            .map((ls, index) => {
                                                return (
                                                    <tr key={ls._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{ls.fullname}</td>
                                                        <td>{ls.email}</td>
                                                        <td>{ls.crs}</td>
                                                        <td>
                                                            <Button type="button" variant="danger" onClick={() => { Deleteuser(ls._id) }}>DELETE</Button>
                                                            <br></br>
                                                            <a  href={`/hrpage/addperformance/${ls._id}/`} className='btn btn-info'>Add Performance</a>
                                                            <a  href={`/hrpage/addsalary/${ls._id}/`} className='btn btn-info'>Add Salary</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        :
                                        record
                                            .map((ls, index) => {
                                                return (
                                                    <tr key={ls._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{ls.fullname}</td>
                                                        <td>{ls.email}</td>
                                                        <td>{ls.crs}</td>
                                                        <td>
                                                            <Button type="button" variant="danger" onClick={() => { Deleteuser(ls._id) }}>DELETE</Button>
                                                            <a  href={`/hrpage/addperformance/${ls._id}/`} className='btn btn-info'>Add Performance</a>
                                                            <a  href={`/hrpage/addsalary/${ls._id}/`} className='btn btn-info'>Add Salary</a>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

