import "./Navbar.css";

//import react bootstrap components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export const TopBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-Commerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Basket</Nav.Link>
            <NavDropdown title="View Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
