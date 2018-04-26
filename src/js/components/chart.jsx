import React from 'react';
import {Line} from 'react-chartjs-2';


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
            }
        }
    }

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
                            this.borderColor = '#666';
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

            // const l = this.state.person.exercises[this.state.exercise].length > 5 ?
            //     5 : this.state.person.exercises[this.state.exercise].length;

            // for(let i = 1; i <= 5; i++) {
            //     this.data.labels.push(i)
            // }

            let tempData = [];
            let i = 1;

            const obj = this.state.person.exercises[this.state.exercise];

            for (let property in obj) {
                if (obj.hasOwnProperty(property)) {
                    tempData.push(parseFloat(obj[property].result));
                    this.data.labels.push(i);
                    i++
                }
            }

            console.log(tempData);
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
        </div>
    }
}

export {Chart};