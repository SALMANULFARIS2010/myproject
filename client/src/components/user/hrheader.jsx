import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function HRheader(){
  return(
    <>
        <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        HR Managrment */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}