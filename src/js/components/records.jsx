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
            person: this.props.data
        };
    }



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
                        <Chart data={this.props.data} fetchAgain={this.props.fetchAgain}/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Records}