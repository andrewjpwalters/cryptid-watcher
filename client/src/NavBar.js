import { UserContext } from "./context/user";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from "react";
import { Button } from 'react-bootstrap'

function NavBar() {
    const { user, setUser } = useContext(UserContext)
    function handleLogoutClick() {
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
                    <LinkContainer to="/cryptids" exact>
                        <Nav.Link>Cryptids</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/posts" exact>
                        <Nav.Link>Report Sightings</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/new">
                        <Nav.Link>Submit New</Nav.Link>
                    </LinkContainer>
                    <Button variant="outline-dark" onClick={handleLogoutClick}>
                        Logout, {user.username}
                    </Button>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;