import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
 



 

function Webheader() {
  return (
    <Navbar expand="lg" className="bg-body-blue">
       <nav style={{ backgroundColor: 'blue', color: 'black' }}></nav>
      <Container>
        <Navbar.Brand href="#home">CODECRAFT SOLUTION</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav className="">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Signup">Empolyee</Nav.Link>
            <Nav.Link href="/Signin">Signin</Nav.Link>
            <Nav.Link href="/hrsignup">HR</Nav.Link>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Webheader;

