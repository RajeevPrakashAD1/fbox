import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import box from '../../images/introbox.svg';

const Card = ({ theme }) => {
	return (
		<Carddiv className="card" theme={theme}>
			<h2>Basic</h2>
			<div>
				<ul>
					<li>
						<H1>FuncBox Binder</H1>
					</li>
					<li>
						<H1>3 mathematical apps </H1>
					</li>
					<li>
						<H1>3 game apps </H1>
					</li>
					<li>
						<H1>Stickers </H1>
					</li>
					<li>
						<H1>Kickstart guide </H1>
					</li>
					<li>
						<H1>Interactive website</H1>
					</li>
				</ul>
			</div>
		</Carddiv>
	);
};

export default Card;

const Carddiv = styled.div`
	height: 380px;
	width: 280px;
	background-color: ${(props) => props.theme.g};
	text-align: center;
	color: white;

	background-color: ${(props) => props.theme};
`;

const Introtextdiv = styled.div`
	width: 70%;

	text-align: left;

	align-items: center;
	margin: 0 auto;

	background-position: center top;
	@media (max-width: 500px) {
		width: 100%;
	}
`;

const A = styled.span`color: red;`;
