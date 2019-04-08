import styled from 'styled-components';

export const PlayerCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
	margin: 20px;
	position: relative;
	border-right : 1px solid #01123c;

	@media (max-width: 576px) {
	    width: 100%;
	}
`;

export const ColumnWrapper = styled.div`
	width: 100%;
`;

export const TwoColumnInsideWrapper = styled.div`
	display: flex;
	flex-direction: wrap;
	height: 150px;
`;

export const PlayerImg = styled.img`
	border-right : 1px solid #01123c;
`;