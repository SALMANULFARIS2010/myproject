// import { Col, Container, Row } from 'react-bootstrap';

// import Footer from "./footer";
// import Middle from "./middle";
// import Webheader from "./webheader";

// import Image from 'react-bootstrap/Image';
//  import "./home.css"
// import Webheader from './webheader';

// function Home(){
//     return(
//         <>
//         <Webheader/>
//             <Container className='contain'>
                
//                 <Row className=''>
//                     <Col>
                        
//                     <Image className="imghome" width="" height="" src="" rounded fluid />
//                     </Col>
//                     <Col md="6"> 
//                         <p  className='text1'>
//                             Approved by all educators all over the world</p>
//                         <p>"Welcome radually int coding skills. child is just starting out or already has some codi!"</p>
//                      </Col>
//                         {/* <Image className="" src="https://www.tynker.com/image/homepage/spring-2024/progression-stack.webp" rounded fluid  /> */}
                       
                        
                    
//                 </Row>
//                 <Row>
//                     <Col>
//                     <p></p>
//                     </Col>
//                 </Row>
//             </Container>
//                 </>
//     )


// }
//  export default Home;

import Footer from "./footer";
// import Middle from "./middle";
import Webheader from "./webheader";
import Slider from "./slide";


// import Webheader from "./Webheader";

export default function Home(){
    return(
        <>
        <Webheader/>
        <Slider/>
        {/* <Middle/> */}
        <Footer/>
     
        </>
    )
}