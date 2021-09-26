import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import alien from '../../images/alien.svg';
import angryBird from '../../images/angryBird.svg';
import Card from './card';
import Envelop from './envelop';
import Plan from './plan';

const PPlan = () => {
	return (
		<PPlandiv img={[ alien, angryBird ]}>
			<h1> Plan </h1>
			<Plan />
		</PPlandiv>
	);
};

export default PPlan;

const PPlandiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: url(${(props) => props.img[0]}), url(${(props) => props.img[1]});
	background-repeat: no-repeat;
	background-position: bottom left, 700px 390px;
`;

const A = styled.span`color: red;`;
