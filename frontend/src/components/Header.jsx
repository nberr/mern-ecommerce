import { Navbar, Nav, Container, NavbarBrand, Badge, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const logoutHandler = () => {
        console.log('logout');
    };

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
                                {
                                    cartItems.length > 0 && (
                                    <Badge pill  bg='success' style={{marginLeft: '5px'}}>
                                        { cartItems.reduce((a, c) => a + c.qty, 0) }
                                    </Badge>
                                    )
                                }
                            </Nav.Link>
                        </LinkContainer>
                        { userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                        <LinkContainer to="/login">
                            <Nav.Link>
                                <FaUser/>Sign In
                                </Nav.Link>
                        </LinkContainer>
                        ) }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header