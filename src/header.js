import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return <header>

<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Barra de Navegacion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#ejemplo">categoria1</Nav.Link>
            <Nav.Link href="#ejemplo2">categoria2</Nav.Link>
            <Nav.Link href="#ejemplo">categoria3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
    </header>;
}



export default Header;