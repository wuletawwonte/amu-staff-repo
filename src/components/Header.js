import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Link} from "react-router-dom";

function Header() {
  return (
    <Router>
      <Navbar bg="dark" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand href="/">AMU-Staff</Navbar.Brand>
          <Nav className="justify-content-end">
              <li><Link to="/">What</Link></li>
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Router>
  );
}

export default Header;
