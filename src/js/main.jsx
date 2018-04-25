import React from 'react';
import ReactDOM from 'react-dom';
import config from './config.js';
import {Routing} from './components/routing.jsx'

require('../sass/main.scss');

ReactDOM.render(
    <Routing id={config.playerId} loggedAs={config.loggedAs}/>,
    document.getElementById('app')
);