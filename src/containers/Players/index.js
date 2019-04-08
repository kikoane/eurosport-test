import React from 'react';
import { array } from 'prop-types';

import Player from '../../components/Player';
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
					<Player player={player} key={player.shortname} />
				))
			}
		</PlayersWrapper>
	);
}

Players.propTypes = propTypes;

export default Players;