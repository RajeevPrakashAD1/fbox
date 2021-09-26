import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import gift from '../../images/gift.svg';

const Gift = () => {
	return (
		<GiftDiv>
			<img src={gift} alt="dfk" height="110px" style={{ marginRight: '40px' }} />
			<H1> Searching for a one-time gift or corporate? You're in luck »</H1>
		</GiftDiv>
	);
};

export default Gift;

const GiftDiv = styled.div`
	margin-top: 30px 0px;
	max-height: 60px;

	background-color: #fffcb2;
	display: flex;
	flex-direction: row;
	justify-content: center;

	align-items: center;
	color: red !important;

	width: 100%;

	@media (max-width: 900px) {
		flex-direction: column;
		max-height: 200px;
	}
`;
