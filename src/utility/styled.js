import styled from 'styled-components';

export const H1 = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 36px;
	line-height: 46px;
	/* or 128% */

	/* primary */

	color: #425c56;

	@media (max-width: 500px) {
		font-size: 20px;
		line-height: 26px;
	}
`;
