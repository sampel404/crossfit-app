import React from 'react';
import results from './db/table_db.js';

let resultsPlaces = [...results];

for(let n = 0, l = resultsPlaces[0].exercises.length; n < l; n++) {
    resultsPlaces.sort((a, b) => {
        return b.exercises[n].result - a.exercises[n].result;
    });

    if(resultsPlaces[0].exercises[n].unit === 'seconds') resultsPlaces.reverse();


    let prev = null;

    resultsPlaces.map((el, i) => {
        let rep = 0;
        if(i > 0) prev = resultsPlaces[i-1].exercises[n].result;
        if(el.exercises[n].result === prev) rep = 1;
        return el.exercises[n].place = i + 1 - rep;
    });
}

resultsPlaces.map(el=>{
    const sum = el.exercises.reduce((p,c)=>{
        return p + c.place
    }, 0);
    return el.score = sum;
});

resultsPlaces.sort((a,b)=>{
    return a.score - b.score;
});

class TableRow extends React.Component{
    render(){
        const exercises = this.props.exc.map((ex, i)=>{
           return <td key={i}>{ex.place} <br/> {ex.result}</td>
        });
        return <tr>
            <td>{this.props.name} <br/> {this.props.surname}</td>
            <td>{this.props.score}</td>
            {exercises}
        </tr>
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            table: resultsPlaces
        }
    }
    render(){
        const list = this.state.table.map(el=>{
            const exc = el.exercises.map(ex=>{
                return {
                    result: ex.result,
                    place: ex.place
                }
            });
            return <TableRow
                key={el._id}
                name={el.name}
                surname={el.surname}
                score={el.score}
                exc = {exc}
            />
        });

        //pozniej z th komponent do sortownaia z id do zlapania
        return <table>
            <thead>

            </thead>
            <tbody>
            {list}
            </tbody>
        </table>
    }
}

export {Table}