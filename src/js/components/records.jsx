import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import {Chart} from './chart.jsx';
import fire from "../fire";


class Records extends React.Component{

    updateDB(){
        let messagesRef = fire.database().ref('players_1');
        console.log('cos2');
        let newPostKey = fire.database().ref('players_1').child('0');
        //.push().key;
        console.log(newPostKey);
        // fire.database().ref('players_1').push( {
        //     id: 129,
        //     ppp: 2
        // } );
    }
    render(){
        return <div>
            <HeaderBlack />
            <Image />
            <div className="container">
                <div className="separator double"></div>
                <Submenu />
                <div className="separator double"></div>
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-award-3 text-primary push-15-r"></i>
                            <span>Moje rekordy</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <Chart data={this.props.data} />

                        <button onClick={this.updateDB}>UPDATE</button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Records}