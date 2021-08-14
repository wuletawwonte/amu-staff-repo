import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="/">AMU-Staff</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
