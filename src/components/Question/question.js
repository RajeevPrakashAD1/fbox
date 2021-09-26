import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import gift from '../../images/gift.svg';

const Question = () => {
	return (
		<Questiondiv>
			<h1>Frequently Asked Question</h1>
			<div className="qdiv">
				<h3> What age is Funcbox for? </h3>

				<H1>Funcbox is designed for kids 6-12 years in age.</H1>
				<h3> What age is Funcbox for? </h3>

				<H1>Funcbox is designed for kids 6-12 years in age.</H1>
				<h3> What age is Funcbox for? </h3>

				<H1>Funcbox is designed for kids 6-12 years in age.</H1>
				<h3> What age is Funcbox for? </h3>

				<H1>Funcbox is designed for kids 6-12 years in age.</H1>
			</div>
		</Questiondiv>
	);
};

export default Question;

const Questiondiv = styled.div`
	margin: 60px 0px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	align-items: center;

	width: 100%;
	.qdiv {
		background-color: ;
		margin-top: 30px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		margin-top: 200px;

		max-height: 200px;
		.qdiv {
			margin-left: 10px;
		}
	}
`;
