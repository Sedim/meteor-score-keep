import React from 'react';
import ReactDOM from 'react-dom';
import {meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {Players} from '../imports/api/players';
import App from './../imports/ui/App';



// import TitleBar from '../imports/ui/TitleBar';
// import AddPlayer from '../imports/ui/AddPlayer';
// import PlayerList from '../imports/ui/PlayerList';

Meteor.startup(() => {
  Tracker.autorun(() => {
    // https://docs.mongodb.com/manual/reference/method/cursor.sort/
    // http://docs.meteor.com/api/collections.html#sortspecifiers
    const players = Players.find({}, {sort: {score: -1}}).fetch();// find  all records {} and sort score ascendingly (-1)
    let title = 'Score Keeps';
    let subtitle = 'by Sedim'
    ReactDOM.render(<App title={title} subtitle={subtitle} players={players}/>, document.getElementById('app'));
  });
});
