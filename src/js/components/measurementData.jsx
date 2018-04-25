import React from 'react';

class MeasurementData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data
        }
    }
    


    render(){
        console.log(this.state.person);
        return <h1>measurement</h1>
    }
}

export {MeasurementData}