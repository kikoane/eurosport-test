import styled from 'styled-components';

export const PlayerAttributeWrapper = styled.div`
	display:flex;
	flex-flow: row wrap;
    justify-content: space-between;
	width:100%;
`;

export const Title = styled.div`
 	flex: 0 1 50%;
	font-weight: bold;
	text-align: center;
	color: #030c36;
	border-bottom : 1px solid #01123c;

	&:last-child {
		border-bottom: 0px;
	}
`;

export const Info = styled.div`
	flex: 0 1 50%;
	text-align: center;
	background: #66d998 !important;
	font-weight: bold;
	color: #030c36;
	border-left : 1px solid #01123c;
	border-bottom : 1px solid #01123c;
	margin-left: -2px;
`;