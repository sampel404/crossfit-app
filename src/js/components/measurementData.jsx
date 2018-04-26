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
        return <table className="table table-hover" width="100%">
            <thead>
                <tr className="headers">
                    <th className="">Utworzony dnia</th>
                    <th className="">Wzrost</th>
                    <th className="">Waga</th>
                    <th className="">Tłuszcz</th>
                    <th className="">BMI</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12.03.2018</td>
                    <td>183 cm</td>
                    <td>86 kg</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    }
}

export {MeasurementData}