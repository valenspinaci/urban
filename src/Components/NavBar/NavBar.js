import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Images/logo-urban.png";
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const NavBar = () => {
    const { cart } = useContext(CartContext)
    return (
        <Navbar sticky="top" bg="black" variant="dark" expand="lg">
            <Container>
                <Link to={"/"} className="brandBorder"><img className='logo brandBorder' src={logo} alt="logo-urban"/></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-3 mt-3">
                        <Nav.Link className='linkNavbar ms-3' href="/">Home</Nav.Link>
                        <NavDropdown className="ms-3 linkDropdown" variant="light" title="Productos">
                            <NavDropdown.Item className="linkCategorias fondoCategorias" href="/category/hoodies">Buzos</NavDropdown.Item>
                            <NavDropdown.Item className="linkCategorias fondoCategorias" href="/category/shirts">Remeras</NavDropdown.Item>
                            <NavDropdown.Item className="linkCategorias fondoCategorias" href="/category/shoes">Zapatillas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='linkNavbar ms-3' href="/contact">Contacto</Nav.Link>
                    </Nav>
                    <Nav className="me-auto mb-3 mt-3">
                        {cart.length !== 0 ? <Link to={"/cart"}className='ms-3 cart' href="#cart"><CartWidget/></Link> : console.log("Empty cart")}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;