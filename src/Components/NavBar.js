import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/home">
            <img
              src="https://i.imgur.com/vdowI17.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/financing">Financing</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <NavDropdown bg="success" variant="light" title="Request Forms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/requestform">Standard Request Form</NavDropdown.Item>
              <NavDropdown.Item href="/requestformcustom">
                Custom Request Form
              </NavDropdown.Item>
              <NavDropdown.Item href="/requestformvirtual">Inspection Request Form</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;