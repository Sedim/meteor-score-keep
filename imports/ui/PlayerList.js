import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player'; 

export default class PlayerList extends React.Component {
  renderPlayers (){
    if (this.props.players[0])
      return this.props.players.map((player) => <Player key={player._id} player={player} />);
    else
      return <h4>Please add a player</h4>

  }
  render() {
    return(
    <div>
    {this.renderPlayers()}
    </div>
    )
  }  
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
