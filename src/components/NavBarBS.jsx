import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'; 


function NavBarBS () {
  return (
    <Navbar expand="lg" className="bg-danger" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to={'/'}>
        <img className='logo' src='../logopollosolonuevo.png' alt='Logo' style={{height: '5.5rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/category/ofertas'}>Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/category/frescos'}>Frescos</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item as={NavLink} to={'/category/congelados'}>
                Congelados
              </NavDropdown.Item>
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