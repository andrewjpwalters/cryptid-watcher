import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {

    function handleLogoutClick({ setUser }) {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }
    return (
        <Navbar bg="light" expand="lg" sticky="top" style={{ paddingLeft: "1rem" }}>
            <LinkContainer to="/" exact>
                <Navbar.Brand>Cryptid Watcher</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/cryptid" exact>
                        <Nav.Link>Cryptids</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/post" exact>
                        <Nav.Link>Report Sightings</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <Nav.Link>Submit Cryptid</Nav.Link>
                    </LinkContainer>
                    <button onClick={handleLogoutClick}>
                        Logout
                    </button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;