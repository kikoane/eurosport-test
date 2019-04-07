import React, { Component } from 'react';

import fetchPlayers from './services/fetchPlayers';
import Players from './containers/Players';
import {
  PlayerWrapper
} from './styles';

class App extends Component {
  state = {
    players: []
  };

  async componentDidMount() {
    const { players } = await fetchPlayers();
    this.setState({ players: players })
  }

  render() {
    return (
     <PlayerWrapper>
        <Players players={this.state.players} />
     </PlayerWrapper>
    );
  }
}

export default App;
