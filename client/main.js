import React from 'react';
import ReactDOM from 'react-dom';
import { meteor } from 'meteor/meteor';

import {Players} from '../imports/api/players';

Tracker.autorun(()=> console.log('Players list', Players.find().fetch()));
// Tracker.autorun(function () {
//     console.log('Players list', Players.find().fetch());
//   });
  
const players = [{
    _id: '1',
    name: 'Lauren',
    score: 99
}, {
    _id: '2',
    name: 'Cory',
    score: -1
}, {
    _id: '3',
    name: 'Andrew',
    score: -12
}];

const renderPlayers = function (params) {
    let newUsers = params.map((user) => <p key= {user._id}>{user.name} has {user.score -1} points</p>)
    // let numbers = [3, 4, 5];
    // console.log (JSON.stringify(params))
    // let newNumbers = numbers.map((number) => <p key= {number}>{number}</p>)
    // console.log(JSON.stringify(newUsers));
    // console.log(newUsers);
    // return [<p key="1">1</p>, <p key="2">2</p>, <p key="3">5</p>,]
    return newUsers;
};

Meteor.startup(function () {
    let title = 'Score Keep';
    let name = 'Sedim';
    let jsx = (
    <div>
        <h1>{title}</h1>
        <p>This is from {name}</p>
        <p>This is my second p</p> 
        {renderPlayers(players)}
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
