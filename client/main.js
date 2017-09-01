import React from 'react'
import ReactDOM from 'react-dom'
import {meteor} from 'meteor/meteor'

Meteor.startup( function () {
    let name = 'Sedim'
    let jsx = <p>This is from {name}</p>
    ReactDOM.render(jsx, document.getElementById('app'))
})
