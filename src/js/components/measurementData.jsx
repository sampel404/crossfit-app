import React from 'react';
import fire from '../fire';

class MeasurementData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data
        }
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */

        // let messagesRef = fire.database().ref('players_1');
        // fire.database().ref('players_1').push( {
        //     id: 2,
        //     ppp: 56
        // } );

        // messagesRef.on('child_added', snapshot => {
        //     /* Update React state when message is added at Firebase Database */
        //     let message = { text: snapshot.val(), id: snapshot.key };
        //     this.setState({ messages: [message].concat(this.state.messages) });
        // })
    }


    render(){
        return <h1>measurement</h1>
    }
}

export {MeasurementData}