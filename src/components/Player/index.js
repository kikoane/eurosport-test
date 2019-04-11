import React from 'react';
import { object } from 'prop-types';

import PlayerHeader from '../PlayerHeader';
import PlayerStats from '../PlayerStats';
import {
  PlayerCardWrapper,
  ColumnWrapper,
  TwoColumnInsideWrapper,
  PlayerImg,
} from './styles';

const propTypes = {
	player: object,
};

const Player = ({player}) => {
	return (
		<PlayerCardWrapper>
			<PlayerHeader player={player}/>
			<ColumnWrapper>
				<TwoColumnInsideWrapper>
					<PlayerImg src={player.picture}/>
					<PlayerStats player={player.data}/>
				</TwoColumnInsideWrapper>
			</ColumnWrapper>		
		</PlayerCardWrapper>
	);
}

Player.propTypes = propTypes;

export default Player;
