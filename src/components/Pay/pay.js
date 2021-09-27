import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import ProceedToPa from '../../images/ProceedToPay.svg';
import del from '../../images/del.svg';
import add from '../../images/add.svg';

const ProceedToPay = () => {
	return (
		<ProceedToPaydiv>
			<div className="pp">
				<div className="paytitle"> Basic</div>
				<div className="payadd">
					<img src={del} alt="del" height="20" />
					<div> 1</div>
					<img src={add} alt="del" height="20" />
				</div>
			</div>

			<div>
				{' '}
				<Link to="/billing">
					<Button className="procedd-btn"> Proceed to Pay</Button>
				</Link>
			</div>
		</ProceedToPaydiv>
	);
};

export default ProceedToPay;

const ProceedToPaydiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	justify-content: space-around;

	.pp {
		display: flex;
		background-color: #edeeff;
		width: 60%;
		justify-content: space-around;
		align-items: center;
		min-width: 300px;
		margin-bottom: 40px;
	}
	.paytitle {
		background-color: #f05d6a;
		font-size: 2rem;
		border-radius: 7px;
		width: 100px;
		height: 60px;
		color: white;
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		padding: 10px;
	}
	.payadd {
		background-color: #f05d6a;
		display: flex;
		flex-direction: row;
		max-height: 30px;
		width: 100px;
		justify-content: space-around;
		align-items: center;
		color: white;
	}

	.procedd-btn {
		background: #36bfa5;
		border-radius: 38px;
	}
`;
