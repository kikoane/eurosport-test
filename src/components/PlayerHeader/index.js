import React from 'react';
import { object } from 'prop-types';

import {
  PlayerHeaderWrapper,
  PlayerCountryPicture,
  PlayerName,
  PlayerRank,
} from './styles';

const propTypes = {
	player: object,
};

const PlayerHeader = ({player}) => {
	const playerCountryPicture = `${player.country.picture}`;
	const playerName = `${player.firstname} ${player.lastname}`;
	const playerRank = `${player.data.rank}`;

	return (
		<PlayerHeaderWrapper>
			<PlayerCountryPicture src={playerCountryPicture}></PlayerCountryPicture>
			<PlayerName>{playerName}</PlayerName>
			<PlayerRank># {playerRank}</PlayerRank>
		</PlayerHeaderWrapper>
	)
};

PlayerHeader.propTypes = propTypes;

export default PlayerHeader;