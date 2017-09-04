import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';

import {Players} from '../imports/api/players';
import TitleBar from  '../imports/ui/TitleBar';
import AddPlayer from  '../imports/ui/AddPlayer';

const renderPlayers = (params) =>
  params.map((user) => (
    <p key={user._id}>

      {user.name} has {user.score} points

    <button onClick={() => {
        //{user.score --}
        Players.update({_id: user._id}, {$inc: {score: -1}}) // $inc directly example
      }}>-1</button>

      <button onClick={() => {
        {user.score++}
        Players.update(user._id, {$set: {score: user.score}}) // $set directly exampl
      }}>+1</button>

      <button onClick={() => {
        //alert("I am an alert box!")
        Players.remove(user._id) // use the object _id directly syntax without _id: 
      }}>X</button>

    </p>
  )
  );

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;

  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';// This clears the field you 
    Players.insert({name: playerName, score: 0});
    console.log(Players.find().fetch());
  };
};


Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Sedim';
    let jsx = (
      <div>
        <TitleBar/>
        {renderPlayers(players)}
        <AddPlayer/>
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name" />
          <button>Add Player</button>
        </form>
      </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
