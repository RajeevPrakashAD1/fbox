import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { H1 } from '../../utility/styled';

import fb from '../../images/footer.svg';

const Footer = () => {
	return (
		<Footerdiv img={fb}>
			<div className="git">
				<h2>Get In Touch </h2>
				<input />
			</div>
			<div className="pp">
				<Link> Join our Team</Link>
				<Link> Privacy Policy</Link>
				<Link> Terms</Link>
			</div>
			<div class="ff">Made With ♥ by Team FuncBox</div>
		</Footerdiv>
	);
};

export default Footer;

const Footerdiv = styled.div`
	height: 300px;
	background: url(${(props) => props.img});
	color: white;
	.pp {
		display: flex;
		flex-direction: column;
		color: white;
		justify-content: flex-end;
		align-items: flex-end;
		padding-right: 20px;
		margin-top: 30px;
	}

	a {
		color: white;
	}

	.git {
		display: flex;
		justify-content: space-around;
		align-items: center;
		min-height: 100px;
	}
	.ff {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	input {
		border: none;
		border-radius: 20px;
		width: 360px;
		height: 40px;
	}
	@media (max-width: 900px) {
		margin-top: 200px;
		.git {
			flex-direction: column;
			padding-top: 20px;gi 
		}
	}
`;
