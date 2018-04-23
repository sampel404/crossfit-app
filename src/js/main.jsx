import React from 'react';
import ReactDOM from 'react-dom';
import results from './table_db.js';

require('../sass/main.scss');

let resultsPlaces = [...results];


for(let n = 0, l = resultsPlaces[0].exercises.length; n < l; n++) {
    resultsPlaces.sort((a, b) => {
        return b.exercises[n].result - a.exercises[n].result;
    });

    if(resultsPlaces[0].exercises[n].unit === 'seconds') resultsPlaces.reverse();

    let rep = 0;
    let prev = null;

    resultsPlaces.map((el, i) => {
        if(i > 0) prev = resultsPlaces[i-1].exercises[n].result;
        if(el.exercises[n].result === prev)rep++;
        return el.exercises[n].place = i + 1 - rep;
    });
}

resultsPlaces.map(el=>{
    const sum = el.exercises.reduce((p,c)=>{
        return p + c.place
    }, 0);
    return el.score = sum;
}).sort((a,b)=>{
    return a.score - b.score;
});




console.log(resultsPlaces);
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('app')
// );