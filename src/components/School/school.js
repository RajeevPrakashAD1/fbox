import React from 'react';
import styled from 'styled-components';
import '../../App.css';
import { Container, Row, Col } from 'react-bootstrap';

import { H1 } from '../../utility/styled';

import i from '../../images/intro.svg';
import bag from '../../images/bag.svg';
import tv from '../../images/tv.svg';
import note from '../../images/note.svg';

const School = () => {
	return (
		<Schooldiv>
			<h1>For School</h1>
			<div className="psdiv">
				<Imgdiv className="imgdiv" img={[ bag, tv, note ]}>
					{' '}
				</Imgdiv>

				<div className="qdiv">
					<div className="sh1">
						<p className="sp">
							Yay! FuncBox brings special discount for all the School Tie-ups. FuncBox can be easily
							incorporated in all the school grades. To make your students outperform and help your
							institute gain an edge over the others contact our team NOW!
						</p>
					</div>
				</div>
			</div>
		</Schooldiv>
	);
};

export default School;

const Imgdiv = styled.div`
	background: url(${(props) => props.img[0]}), url(${(props) => props.img[1]}), url(${(props) => props.img[2]});
	background-repeat: no-repeat;
	background-size: 230px;
	background-position: top left, top right, bottom center;
	@media (max-width: 900px) {
		background: url(${(props) => props.img[0]});
		background-repeat: no-repeat;
		background-position: top center;
	}
`;

const Schooldiv = styled.div`
	margin: 60px 0px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	align-items: center;

	width: 100%;
	.imgdiv {
		min-width: 55%;
	}
	.qdiv {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.psdiv {
		margin-top: 60px;
		display: flex;
		flex-direction: row;
		min-height: 400px;
		width: 100%;
	}

	.sh1 {
		background-color: #f8f8f8;
		padding: 20px;

		min-height: 200px;
	}
	.sp {
		font-size: 24px;
	}

	@media (max-width: 900px) {
		flex-direction: column;
		max-height: 200px;
		margin-top: 300px;

		.psdiv {
			flex-direction: column;
		}
		.imgdiv {
			height: 900px;
		}
	}
`;
