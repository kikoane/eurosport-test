import React from 'react';
import { array } from 'prop-types';

import PlayerCard from '../../components/PlayerCard';
import {
  PlayersWrapper
} from './styles';

const propTypes = {
	players: array,
};

const Players = ({players}) => {
	return (
		<PlayersWrapper>
			{
				players.map((player) => (
					<PlayerCard player={player} key={player.shortname} />
				))
			}
		</PlayersWrapper>
	);
}

Players.propTypes = propTypes;

export default Players;