import React from 'react';
import ReactDOM from 'react-dom';
import config from './config.js';
import {Routing} from './components/routing.jsx'

console.log(config.data);

require('../sass/main.scss');

ReactDOM.render(
    <Routing/>,
    document.getElementById('app')
);