import React from 'react';

import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import bus from '../../images/truck.svg';
import pause from '../../images/pause.svg';
import neww from '../../images/new.svg';

const Ship = () => {
	return (
		<Shipdiv>
			<div>
				{' '}
				<img src={bus} alt="bus" height="50px" /> <S>Free shipping</S>
			</div>
			<div>
				{' '}
				<img src={neww} alt="bus" height="50px" /> <S>No experinece neccesary</S>
			</div>
			<div>
				{' '}
				<img src={pause} alt="bus" height="50px" /> <S>Cancel Anytime </S>
			</div>
		</Shipdiv>
	);
};

export default Ship;
const Shipdiv = styled.div`
	width: 100%;
	background-color: #fffcb2;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 50px 0px;
	padding: 10px;
	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;
	}
`;
const S = styled.span`
	color: red;
	font-size: 20px;
	margin-left: 20px;
`;
