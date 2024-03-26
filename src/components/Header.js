import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
function Header() {
  const listUsers = useSelector((state) => state.user.listUser);
  console.log(listUsers);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/food"}>Blog</Nav.Link>
            <NavDropdown
              style={{ marginLeft: "70px" }}
              title={`(${listUsers.length})Users`}
              id="basic-nav-dropdown"
            >
              {listUsers &&
                listUsers.length > 0 &&
                listUsers.map((item, index) => (
                  <NavDropdown.Item key={`user-${index}`} href="#">
                    {item.email}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
