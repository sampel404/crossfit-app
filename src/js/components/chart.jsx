import React from 'react';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data
        }
    }

    componentDidMount(){

    }

    render(){
        return <h1>12</h1>
    }
}

export {Chart};