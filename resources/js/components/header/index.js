import React from 'react';
import './style.scss';
import {Navbar, Nav} from 'react-bootstrap';


function Header() {
    return (
        <header className="my-0">
            <Navbar bg={'light'}>
                <Navbar.Brand>
                    <img src={'./assets/bookworm_icon.svg'}/>
                    <b>BOOKWORM</b>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className={'active'}>
                        Home
                    </Nav.Link>
                    <Nav.Link>
                        Shop
                    </Nav.Link>
                    <Nav.Link>
                        About
                    </Nav.Link>
                    <Nav.Link>
                        Cart
                        <span>(0)</span>
                    </Nav.Link>
                    <Nav.Link>
                        Sign In
                    </Nav.Link>
                </Nav>

            </Navbar>
        </header>
    );
}

export default Header;
