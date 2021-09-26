import React from 'react';
import styled from 'styled-components';

const NavLogo = ({ img }) => {
	return (
		<NavLogoDiv>
			<img src={img} alt="li" />
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
`;
const LogoText = styled.h5`
	display: inline-block;
	color: grey;
	margin-left: 10px;
	font-size: 1.5rem;
	@media (min-width: 768px) {
		margin-left: 40px;
		font-size: 2rem;
	}
`;
