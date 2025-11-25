import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '/src/assets/logopollosolonuevo.png'; 

function NavBarBS () {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`mainNavbar ${scrolled ? 'scrolled' : ''}`} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'} className="brandWrap">
          <img className='logo' src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/category/ofertas'}>Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/category/frescos'}>Frescos</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={NavLink} to={'/category/congelados'}>Congelados</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={NavLink} to={'/category/precocidos'}>Precocidos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBS;
