import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col, ThemeProvider } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';

import Card from './card';

const Envelop = ({ theme }) => {
	return (
		<div>
			<Envelopdiv>
				<H1>Monthly</H1>
				<H1>Yearly</H1>
				<H1>Half Yearly</H1>
				<H1>Yearly a/month</H1>
			</Envelopdiv>
			<Card theme={theme} />
		</div>
	);
};

export default Envelop;

const Envelopdiv = styled.div`
	height: 300px;
	width: 300px;
	background-color: #edeeff;
	position: relative;
	top: 250px;
	z-index: 10;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
`;
