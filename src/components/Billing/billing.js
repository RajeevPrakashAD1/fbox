import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import ProceedToPa from '../../images/Billing.svg';
import del from '../../images/del.svg';
import add from '../../images/add.svg';
import AddressForm from './form';
import Info from './info';

const Billing = () => {
	return (
		<Billingdiv>
			<Info title={'Billing Address'} />

			<AddressForm />
			<Info title={'Shipping Address'} />
			<AddressForm />
		</Billingdiv>
	);
};

export default Billing;

const Billingdiv = styled.div`
	display: flex;
	width: 50%;

	flex-direction: column;
	@media (max-width: 500px) {
		width: 100%;
	}

	justify-content: space-around;
`;
