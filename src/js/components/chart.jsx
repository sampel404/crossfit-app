import React from 'react';
import {Line} from 'react-chartjs-2';


const data = {
    labels: ["12/03", "13/03", "11/04", "13/04", "18/04", "12/05"],
    datasets: [
        {
            backgroundColor: 'transparent',
            borderColor: '#333',
            lineTension: 0,
            label: 'num of reps',
            data: [12, 19, 3, 5, 2, 3]
        },
        {
            backgroundColor: 'transparent',
            borderColor: '#aaa',
            lineTension: 0,
            label: 'othr',
            data: [11, 11, 4, 2, 9, 7]
        }

    ]
};


class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data,
            exercise: '_1km'
        }
    }

    componentDidMount(){

    }

    render(){
        let options;

        if(this.state.person != null){
            options = Object.keys(this.props.data.excercises).map(el=>{
                return <option key={el} value={el}>{el}</option>
            })
        }
        return <div>
            <select>
                {options}
            </select>
            <div>
                <Line
                    data={data}
                    width={400}
                    height={250}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </div>
    }
}

export {Chart};