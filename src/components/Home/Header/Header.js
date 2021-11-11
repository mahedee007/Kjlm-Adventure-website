import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div >
            <Navbar bg="light" variant="light" expand="lg" >
                <Container className="header">
                    <Navbar.Brand >
                    <img
                    alt="logo"
                    src={logo}
                    width="100"
                    className="d-inline-block align-center"
                     />
                     <span className="ms-1 logo-title">KJML Adventures</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-white ms-4 " to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-white ms-4 " to="/destinations">Destinations</NavLink>
                            <NavLink className="text-decoration-none text-white ms-4 " to="/about">About</NavLink>
                            <NavLink className="text-decoration-none text-white ms-3 " to="/contact">Contact</NavLink>
                            {
                                user.email && <span className="text-white ms-4 me-1">{user.displayName}</span>
                            }
                            {
                                user.email?
                                <Dropdown>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-white fw-bold ms-3 text-center">
                                    <i className="fas fa-user me-2 text-white"></i>Profile
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-light">
                                       <Dropdown.Item><NavLink className="text-decoration-none text-dark" to="/myBooking">My Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-dark" to="/manageBooking">Manage Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-dark" to="/addTour">Add a new Tour</NavLink></Dropdown.Item>
                                       <Dropdown.Item onClick={logOut} className="text-dark">Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <NavLink className="text-decoration-none text-white ms-3  btn btn-warning btn-sm" to="/signin">Sign In</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;