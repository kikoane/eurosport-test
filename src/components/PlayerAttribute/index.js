import React from 'react';
import {
	string, 
	number, 
} from 'prop-types';

import {
  PlayerAttributeWrapper,
  Info,
  Title,
} from './styles';

const propTypes = {
  name: string,
  value: number,
}

const PlayerAttribute = ({name, value}) => {
	return (
				<PlayerAttributeWrapper>
					<Title>{ name }</Title>		
					<Info>{ value }</Info>
				</PlayerAttributeWrapper>
	)
};

PlayerAttribute.propTypes = propTypes;

export default PlayerAttribute;