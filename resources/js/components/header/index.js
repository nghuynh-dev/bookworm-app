import React, {useEffect, useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

export default function HeaderComponent() {
    const carts = useSelector(state => state.cartReducer.cartListReducer)
    return (
        <header className="my-0">
            <Navbar collapseOnSelect expand="md" bg="light">
                <Navbar.Brand href="/">
                    <img src="/assets/bookworm_icon.svg" width="32" height="32" className="d-inline-block align-top my-auto" />
                    <b className="ml-2">BOOKWORM</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={'/'} as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            eventKey={'/shop'} as={Link} to='/shop'>
                            Shop
                        </Nav.Link>
                        <Nav.Link eventKey={'/about'} as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link eventKey={'/cart'} as={Link} to="/cart">
                            Cart <b>(<span>{carts.length}</span>)</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
