import React from 'react';
import style from './navbar.module.css';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavIcons from './navicons';
import NavLogo from './navlogo';

//imges
import n1 from '../../images/house.svg';
import n2 from '../../images/graphic-tablet.svg';
import n3 from '../../images/store.svg';
import n4 from '../../images/login.svg';
import logo from '../../images/logo.svg';

const MyNavbar = () => {
	return (
		<React.Fragment>
			<Navbar collapseOnSelect expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<NavLogo img={logo} />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" />
						<Nav>
							<Nav.Link href="/">
								<NavIcons img={n1} name={'home'} />
							</Nav.Link>
							<Nav.Link href="/">
								<NavIcons img={n2} name={'About'} />
							</Nav.Link>
							<Nav.Link href="/">
								<NavIcons img={n3} name={'Shop'} />
							</Nav.Link>
							<Nav.Link href="/">
								<NavIcons img={n4} name={'Login'} />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default MyNavbar;
