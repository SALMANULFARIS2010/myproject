import {useEffect,useState} from 'react';
import AXIOS from 'axios';
import { Container, Row, Table ,Col} from 'react-bootstrap';
export default function Profile(){
    const idn=sessionStorage.getItem('id')
    const [record,setRecord]=useState([])
    useEffect(()=>{
        const url=`http://localhost:8000/fetchByid/${idn}`;
        AXIOS.get(url).then((res)=>{
                setRecord(res.data)
        })
    },[])

    return(
        <>
        <Container>
           
               {
  record.map((ls)=>{

    return(

        <Row className='rounded shadow p-4 border mt-3'>
   <Col lg={2}>
           <img src={ls.image} className='rounded-circle bg-info' style={{width:'100%'
        ,height:'200px'   
        }}/>
        </Col>
        <Col lg={10}>
            <h3>Name:{ls.fullname}</h3>
            <h3>Job Role:{ls.crs}</h3>
            <h3>Gmail:{ls.email}</h3>
            {/* <h3>Password: {ls.password}</h3> */}
            
        </Col>
        </Row>
     
       
    )

  })

               }
                
           
        </Container>
        
        </>
    )
}