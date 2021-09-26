import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavIcons = ({ img, name }) => {
	return (
		<NavIconDiv>
			<div>
				{' '}
				<img width="40px" src={img} alt="ni" />
			</div>
			<h6> {name}</h6>
		</NavIconDiv>
	);
};

export default NavIcons;

const NavIconDiv = styled.div`@media (min-width: 960px) {margin-left: 70px;}`;
