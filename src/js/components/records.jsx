import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import {Chart} from './chart.jsx';
import fire from "../fire";


class Records extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            person: this.props.data,
            exercise: '_1km',
            val: ''
        };
    }

    changeExercise=(e)=>{
        this.setState({
            exercise: e.target.value
        });
    };

    changeValue=(e)=>{
        this.setState({
            val: e.target.value
        });
    };

    updateDB=(e)=>{
        e.preventDefault()
        let path = fire.database().ref('players_1')
            .child('0')
            .child('exercises')
            .child(this.state.exercise);
        //.push().key;
        const now = new Date;
        const nowDate = `${now.getDay()}.${now.getMonth()}.${now.getFullYear()}`
        path.push( {
            date: nowDate,
            result: this.state.val
        } );
    };
    render(){
        let options;

        if(this.state.person) {
            options = Object.keys(this.state.person.exercises).map(el => {
                return <option key={el} value={el}>{el === '_1km' ? '1km run' : el}</option>
            });
        }
        
        return <div>
            <HeaderBlack />
            <Image name={this.props.name} imgHeader={this.props.imgHeader} />
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
                        
                        <div className="separator double"></div>
                        <form onSubmit={this.updateDB}>
                            <div className="row">
                                <div className="col-xs-2">
                                    <select className="form-control" value={this.state.exercise} onChange={this.changeExercise}>
                                        {options}
                                    </select>
                                </div>
                                <div className="col-xs-2">
                                    <input className="form-control" type='number' value={this.state.val} onChange={this.changeValue}/>
                                </div>
                                <div className="col-xs-2">
                                    <button className="btn btn-primary">Dodaj</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Records}