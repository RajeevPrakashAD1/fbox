import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import cart from '../../images/cart.svg';

const Cart = () => {
	return (
		<Cartdiv>
			<Link to="/cart">
				<CartCircle>
					<img src={cart} alt="ca" />
					<CartText>Go To cart</CartText>
				</CartCircle>
			</Link>
		</Cartdiv>
	);
};

export default Cart;

const Cartdiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const CartCircle = styled.div`
	background-color: #fffcb2;
	width: 250px;
	height: 70px;

	border-radius: 40px 0px 0px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CartText = styled.h5`
	display: inline-block;

	margin-left: 20px;

	@media (min-width: 768px) {
		margin-left: 20px;
	}
`;
