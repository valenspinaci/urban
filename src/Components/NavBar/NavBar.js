import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Images/logo-urban.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Link to={"/"}><img className='logo' src={logo} alt="logo-urban"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-3 mt-3">
                        <Nav.Link className='ms-3 linkNavbar' href="#productos"><Link className="linkNavbar" to={"/"}>Productos</Link></Nav.Link>
                        <Nav.Link className='ms-3 linkNavbar' href="#link2"><Link className="linkNavbar" to={"/contact"}>Contacto</Link></Nav.Link>
                    </Nav>
                    <Nav className="me-auto mb-3 mt-3">
                        <Nav.Link className='ms-3 linkNavbar' href="#carrito"><Link to={"/cart"}><CartWidget/></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;