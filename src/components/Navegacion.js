import React, {Component} from 'react';
import AplicacionContext from '../context/AplicacionContext';
import { Container, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Navegacion extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <AplicacionContext.Consumer>
            { context => (
            <Navbar bg="dark" expand="lg">
              <Container>
              <Navbar.Brand className="text-white">E-Commerce Quiroga</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link ><Link to={'/home/'} >Home</Link></Nav.Link>
                  {!context.login &&
                    <>
                    <Nav.Link ><Link to={'/registro/'}>Registro</Link></Nav.Link>
                    <Nav.Link ><Link to={'/login/'}>Login</Link></Nav.Link>
                    </>
                  }
                </Nav>
                {context.login &&
                <>
                  <div className="text-white">{context.email}</div>
                  <Nav.Link bg="light" onClick={context.logoutUsuario}>Salir</Nav.Link>  
                </>
                }
              </Navbar.Collapse>
              </Container>
            </Navbar>
            )}
          </AplicacionContext.Consumer> 
        )
    }
}

export default Navegacion;