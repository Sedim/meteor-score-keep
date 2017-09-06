import React from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    
    e.preventDefault();
  
    if (playerName) {
      e.target.playerName.value = '';// This clears the field you 
      Players.insert({
        name: playerName,
        score: 0
      });
      // console.log(Players.find().fetch());
    };
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}
