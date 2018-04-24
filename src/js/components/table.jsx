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

class TableHead extends React.Component{
    constructor(props){
        super(props);
        this.arrows= [<div className={'arrow-down'}> </div>, <div className={'arrow-up'}> </div>];
        this.state = {
            currArrow : this.arrows[0],
            arrowPlace: 'score'
        }
    }

    sortByName=()=>{
        if(this.props.sortedBy === 'surname') {
            this.props.reverseTable();
            let n = 0;
            this.state.currArrow === this.arrows[0] ? n = 1 : n = 0;
            this.setState({
                currArrow: this.arrows[n]
            })
        } else {
            this.props.sortBy('surname');
            this.setState({
                currArrow : this.arrows[0],
                arrowPlace: 'surname'
            })
        }
    };

    sortByPoints=()=>{
        if(this.props.sortedBy === 'score') {
            let n = 0;
            this.state.currArrow === this.arrows[0] ? n = 1 : n = 0;
            this.setState({
                currArrow: this.arrows[n]
            });
            this.props.reverseTable();
        } else {
            this.props.sortBy('score');
            this.setState({
                currArrow : this.arrows[0],
                arrowPlace: 'score'
            })
        }
    };

    sortByExercise=(index)=>{
        if(this.props.sortedBy === `exc_${index}`) {
            let n = 0;
            this.state.currArrow === this.arrows[0] ? n = 1 : n = 0;
            this.setState({
                currArrow: this.arrows[n]
            });
            this.props.reverseTable();
        } else {
            this.props.sortByExercise(index);
            this.setState({
                currArrow : this.arrows[0],
                arrowPlace: `exc_${index}`
            })
        }
    };

    render(){
        const arrowPlace = this.state.arrowPlace;
        const currArrow = this.state.currArrow;
        const exercises = this.props.exc.map((ex, i)=>{
            return <th key={i} onClick={()=>this.sortByExercise(i)}>{ex} {arrowPlace === `exc_${i}` && currArrow}</th>
        });
        return <tr>
            <th onClick={this.sortByName}>Imię i nazwisko {arrowPlace === 'surname' && currArrow}</th>
            <th onClick={this.sortByPoints}>Punkty {arrowPlace === 'score' && currArrow}</th>
            {exercises}
        </tr>
    }
}

class TableRow extends React.Component{

    render(){
        const exercises = this.props.exc.map((ex, i)=>{
           return <td id={`tableExercise_${i}`} key={i}>{ex.place} <br/> {ex.result}</td>
        });
        return <tr>
            <td id={'tableName'}>{this.props.name} <br/> {this.props.surname}</td>
            <td id={'tableScore'}>{this.props.score} </td>
            {exercises}
        </tr>
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            table: resultsPlaces,
            sortedBy: 'score'
        }
    }
    sortBy=(s)=>{
        const sortedTable = [...this.state.table].sort((a,b)=>{
            if (a[s] < b[s])
                return -1;
            if (a[s] > b[s])
                return 1;
            return 0;
        });
        this.setState({
            table: sortedTable,
            sortedBy: s
        });
    };
    sortByExercise=(index)=>{
        const sortedTable = [...this.state.table].sort((a,b)=>{
            return a.exercises[index].place - b.exercises[index].place;
        });
        this.setState({
            table: sortedTable,
            sortedBy: `exc_${index}`
        });
    };
    reverseTable=()=>{
        const reversedTable = [...this.state.table].reverse();
        this.setState({
            table: reversedTable
        });
    };
    render(){
        const listTableRow = this.state.table.map(el=>{
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

        const exercisesNames = this.state.table[0].exercises.map(el=>{
            return el.name;
        });

        return <table className='table table-vcenter table-hover'>
            <thead>
                <TableHead
                    sortBy = {this.sortBy}
                    sortByExercise = {this.sortByExercise}
                    sortedBy = {this.state.sortedBy}
                    reverseTable = {this.reverseTable}
                    exc = {exercisesNames}/>
            </thead>
            <tbody>
                {listTableRow}
            </tbody>
        </table>
    }
}

export {Table}