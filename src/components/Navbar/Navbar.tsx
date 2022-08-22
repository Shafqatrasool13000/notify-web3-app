import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid className='mx-auto justify-content-center'>

                <Navbar.Toggle aria-controls="navbarScroll" className='mx-auto' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='nav-link' to="/get-balance">Get Balance</NavLink>
                        <NavLink className='nav-link' to="/approve">Approvre</NavLink>
                        <NavLink className='nav-link' to="/transfer-balance">Transfer</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;