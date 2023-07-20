import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        {/* 
            navbar settings 
            bg - background color
            variant - 
            expand - when should the menu turn into a hamburger? lg makes it turn fairly quickly so we can use md
            collapseOnSelect - when a item is selected the menu will collapse
        */}
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            {/* container so inner elements don't stretch to the edge of the browser */}
            <Container>
                {/* brand name */}
                <LinkContainer to="/">
                    <NavbarBrand>
                        <img src={logo} alt="ProShop"/>
                        ProShop
                    </NavbarBrand>
                </LinkContainer>
                
                {/*  */}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {/* components that will be hidden in the hamburger menu */}
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* ms-auto aligns links to right */}
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link>
                                <FaShoppingCart/>Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                <FaUser/>Sign In
                                </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header