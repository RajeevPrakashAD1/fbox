import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';

const Info = ({ title }) => {
	return (
		<Infodiv>
			<p>{title} </p>
			Sherlock Holmes 211B, Baker Street, London, United Kingdom 929290304
		</Infodiv>
	);
};

export default Info;
const Infodiv = styled.div`
	max-width: 50%;
	text-align: left;
	margin: 30px 20px;
	padding: 20px;
	@media (max-width: 500px) {
		margin: 30px 5px;
		padding: 5px;
		max-width: 100%;
	}
`;
