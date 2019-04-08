import React from 'react';
import { object } from 'prop-types';

import PlayerAttribute from '../PlayerAttribute'
import formatHeight from '../../lib/formatHeight'
import formatWeight from '../../lib/formatWeight'
import computeMatchStats from '../../lib/computeMatchStats'
import {
  PlayerStatsWrapper,
} from './styles';

const propTypes = {
	player: object,
};

const PlayerStats = ({player}) => {
	const playerWeight = formatWeight(player.weight);
	const playerHeight = formatHeight(player.height);
	const { wins, losses } = computeMatchStats(player.last);

	return (
			<PlayerStatsWrapper>
				<PlayerAttribute name="Age" value={player.age}/>
				<PlayerAttribute name="Points" value={player.points}/>
				<PlayerAttribute name="Weight (in kg)" value={playerWeight}/>
				<PlayerAttribute name="Height (in m)" value={playerHeight}/>
				<PlayerAttribute name="Wins" value={wins}/>
				<PlayerAttribute name="Losses" value={losses}/>
			</PlayerStatsWrapper>
	)
};

PlayerStats.propTypes = propTypes;

export default PlayerStats;