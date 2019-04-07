import React from 'react';

import {
  PlayerCardWrapper
} from './styles';

const PlayerCard = ({player}) => {
	return (
		<PlayerCardWrapper>
			{console.log(player)}
		</PlayerCardWrapper>
		);
}

export default PlayerCard;