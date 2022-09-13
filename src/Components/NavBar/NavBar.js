import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Images/logo-urban.png";
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar sticky="top" bg="black" variant="dark" expand="lg">
            <Container>
                <Link to={"/"}><Navbar.Brand href="#home"><img className='logo' src={logo} alt="logo-urban"/></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-3 mt-3">
                        <NavDropdown className="ms-3 linkDropdown" variant="light" title="Productos">
                            <Link className="linkCategorias" to={"/category/hoodie"}><NavDropdown.Item className="fondoCategorias" href="#action/3.1">Buzos</NavDropdown.Item></Link>
                            <Link className="linkCategorias" to={"/category/shirt"}><NavDropdown.Item className="fondoCategorias" href="#action/3.2">Remeras</NavDropdown.Item></Link>
                            <Link className="linkCategorias" to={"/category/shoes"}><NavDropdown.Item className="fondoCategorias" href="#action/3.3">Zapatillas</NavDropdown.Item></Link>
                        </NavDropdown>
                        <Link className="linkNavbar" to={"/contact"}><Nav.Link className='ms-3' href="#link2">Contacto</Nav.Link></Link>
                    </Nav>
                    <Nav className="me-auto mb-3 mt-3">
                        <Link to={"/cart"}className='ms-3' href="#carrito"><CartWidget/></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;