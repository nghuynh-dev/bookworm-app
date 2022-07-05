import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <header className="my-0">
            <Navbar collapseOnSelect expand="md" bg="light">
                <Navbar.Brand href="#/">
                    <img src="/assets/bookworm_icon.svg" width="32" height="32" className="d-inline-block align-top my-auto" />
                    <b className="ml-2">BOOKWORM</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto"
                         // activeKey={this.state.pathname}
                    >
                        <Nav.Link eventKey={'/'} as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            eventKey={'/shop'} as={Link} to='/shop'
                            // eventKey={'/product/filter'} as={Link} to="/product/filter?show=20&sort=sale" onClick={() => this.props.resetFilterPage()} replace
                        >
                            Shop
                        </Nav.Link>
                        <Nav.Link eventKey={'/about'} as={Link} to="/about">
                            About
                        </Nav.Link>
                        <Nav.Link eventKey={'/cart'} as={Link} to="/cart">
                            {/*Cart <b>(<span>{this.props.cartAmount}</span>)</b>*/}
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
