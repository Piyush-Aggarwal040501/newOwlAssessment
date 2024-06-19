import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function OurNavbar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">NewOwlAi</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/new">Add Student</Nav.Link>
            <Nav.Link href="/">All Students</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default OurNavbar;