import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import box from '../../images/introbox.svg';

const Intro = () => {
	return (
		<Introdiv>
			<div>
				<img className="introimg" src={i} height="450" alt="i" />
			</div>
			<div className="introdiv">
				<Introtextdiv className="introdiv2">
					<H1>
						FuncBox is a box full of surprises which will teach you educational concepts and coding with a
						revolutionary twist.
					</H1>
					<H1>
						<A> {'>'} </A> Perfect for age-group 6-12 years..
					</H1>

					<H1>
						<A> {'>'} </A>Build your own fun games.
					</H1>
					<H1>
						{' '}
						<A> {'>'} </A>Learn to code and explore.
					</H1>
					<H1>
						<A> {'>'} </A>Share your game with your friends.
					</H1>
				</Introtextdiv>
			</div>
		</Introdiv>
	);
};

export default Intro;

const Introdiv = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-left: 80px;
	@media (max-width: 900px) {
		flex-direction: column;
		margin-left: 20px;
		justify-content: center;
	}
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
