import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Juicebox Blog!♜</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#write">Features</Nav.Link>
            <Nav.Link href="#read">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default Navigation;