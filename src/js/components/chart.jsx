import React from 'react';
import {Line} from 'react-chartjs-2';
import fire from "../fire";
import config from "../config"


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data,
            exercise: '_1km',
            toCompare: '',
            toCompareData: null,
            toCompareResults: {
                label : '',
                backgroundColor: 'transparent',
                borderColor: 'transparent'
            },
            val: '',
            rerender: 0,
        }
    }

    changeValue=(e)=>{
        this.setState({
            val: e.target.value
        });
    };

    updateDB=(e)=>{
        e.preventDefault();
        let path = fire.database().ref(`players_${config.playerId}`)
            .child('0')
            .child('exercises')
            .child(this.state.exercise);
        const now = new Date;
        const nowDate = `${now.getDay()}.${now.getMonth()}.${now.getFullYear()}`
        path.push( {
            date: nowDate,
            result: this.state.val
        } ).then(
            setTimeout(()=>{this.props.fetchAgain()}, 1000)
        );

    };

    changeExercise=(e)=>{
        this.setState({
            exercise: e.target.value
        });
    };

    changeToCompare=(e)=>{
        this.setState({
            toCompare: e.target.value
        });
    };

    componentWillReceiveProps(nextProps){
        this.setState({
            person: nextProps.data
        })
    }

    compare=(e)=>{
        e.preventDefault();
        const url = `https://crossfit-app-cl.firebaseio.com/players_${this.state.toCompare}.json`;
        fetch(url).then(res => res.json())
            .then(res => {
                    class DataSet {
                        constructor(label, data) {
                            this.backgroundColor ='transparent';
                            this.borderColor = '#888';
                            this.lineTension = 0;
                            this.label = label;
                            this.data = data;
                            this.radius = 2
                        }
                    }

                    const label = res[0].name + ' ' + res[0].surname;

                    const tempData = [];

                    res[0].exercises[this.state.exercise].forEach(el=>{
                        tempData.push(el.result)
                    });

                    while(tempData.length <=5){
                        tempData.unshift(null)
                    }

                    
                    this.setState({
                        toCompareData: res[0].exercises[this.state.exercise],
                        toCompareResults: new DataSet(label, tempData.splice(-5))
                    });
                }
            );
    };

    render(){
        this.data = {
            labels: [],
            datasets: [
                {
                    backgroundColor: 'transparent',
                    borderColor: '#ff4103',
                    lineTension: 0,
                    label: null,
                    data: null,
                    radius: 2
                },
                this.state.toCompareResults
            ]
        };

        let options;

        if(this.state.person != null){


            let tempData = [];
            let i = 1;

            const obj = this.state.person.exercises[this.state.exercise];

            for (let property in obj) {
                if (obj.hasOwnProperty(property)) {
                    tempData.push(parseFloat(obj[property].result));
                    i<=5 && this.data.labels.push(i);
                    i++
                }
            }
            tempData = tempData.splice(-5);

            this.data.datasets[0].data = tempData;
            this.data.datasets[0].label = this.state.person.name;

            options = Object.keys(this.props.data.exercises).map(el=>{
                return <option key={el} value={el}>{el==='_1km' ? '1km run': el}</option>
            })
        }

        return <div>
            <form onSubmit={this.compare}>
                <div className="row">
                    <div className="col-xs-2">
                        <select className="form-control" value={this.state.exercise} onChange={this.changeExercise}>
                            {options}
                        </select>
                    </div>
                    <div className="col-xs-2">
                        <input className="form-control" placeholder="podaj id użytkownika" type='number' value={this.state.toCompare} onChange={this.changeToCompare}/>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-primary">Porównaj wyniki</button>
                    </div>
                </div>
            </form>
            <div className="separator double"></div>
            <div>
                <Line
                    data={this.data}
                    width={400}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display:false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display:false
                                }
                            }]
                        }
                    }}
                />
            </div>
            <div className="separator double"></div>
            <form onSubmit={this.updateDB}>
                <div className="row">
                    <div className="col-xs-2">
                        <input className="form-control" type='number' value={this.state.val} onChange={this.changeValue}/>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-primary">Dodaj</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

export {Chart};