import React from 'react';
import styled from 'styled-components';

const NavLogo = ({ img }) => {
	return (
		<NavLogoDiv>
			<img src={img} alt="li" height="60px" />
			<LogoText> FuncBox </LogoText>
		</NavLogoDiv>
	);
};

export default NavLogo;

const NavLogoDiv = styled.div`
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	bottom: 10px;
`;
const LogoText = styled.h5`
	display: inline-block;
	position: relative;
	top: 15px;
	font-family: 'Bubblegum Sans', cursive;

	color: grey;
	margin-left: 10px;
	font-size: 1.5rem;
	@media (min-width: 768px) {
		font-size: 2rem;
	}
`;
