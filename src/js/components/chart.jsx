import React from 'react';
import ReactDOM from 'react-dom';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }

    componentDidMount(){
        const url = `https://crossfit-app-cl.firebaseio.com/players_${this.props.id}.json`;

        fetch(url).then(res => res.json())
            .then(res => this.createChart(res));

    }

    createChart(res){
        let person = [...res][0];

        this.setState({
            person: person
        });
        console.log(this.state.person);
    }

    render(){
        return <h1>12</h1>
    }
}

export {Chart};