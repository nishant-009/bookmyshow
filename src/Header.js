import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="/">This is branch 1 header</Navbar.Brand>

          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{paddingLeft: "200px"}}>Home</Nav.Link>
              <Button href="#action2" style={{textAlign:"center" ,paddingLeft: "0px", background:"rgb(236, 94, 113)"}}>Sign in</Button>
              {/* <Nav.Link href="#action2" style={{paddingLeft: "50px"}}>Link</Nav.Link> */}
              <NavDropdown title="Movies" id="navbarScrollingDropdown" style={{paddingLeft: "50px"}}>
                <NavDropdown.Item href="/movies">All Movies</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>

        <Container fluid style={{background: "rgb(43, 49, 72)", color: "white", display: "flex",gap:"30px", padding:"10px", paddingLeft:"300px"}}>
            <a>Movies</a>
            <a>Sports</a>
            <a>Streams</a>
            <a>Events</a>
            <a>Plays</a>
            <a>Activities</a>
            <a>Buzz</a>
        </Container>

    </div>
  );
}

export default Header;

