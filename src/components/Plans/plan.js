import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import box from '../../images/introbox.svg';
import Card from './card';
import Envelop from './envelop';
const theme = {
	r: '#F05D6A',
	g: '#36BFA5',
	y: '#FFD27B'
};

const Plan = () => {
	return (
		<Plandiv>
			<Envelop theme="#F05D6Aed" />
			<Envelop theme="#36BFA5" />
			<Envelop theme="#FFD27B" />
		</Plandiv>
	);
};

export default Plan;

const Plandiv = styled.div`
	${'' /* height: 600px;
	width: 600px; */} display:flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	width: 100%;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
