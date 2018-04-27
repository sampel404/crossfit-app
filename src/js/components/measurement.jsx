import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import {MeasurementData} from "./measurementData.jsx";
import {Table} from './table.jsx';



class Measurement extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image name={this.props.name} imgHeader={this.props.imgHeader} />
            <div className="container">
                <div className="separator double"></div>
                <Submenu />
                <div className="separator double"></div>
                <div className="block">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-xs-6">
                                <h3 className="block-title">
                                    <i className="icon-sl-outline icon-award-3 text-primary push-15-r"></i>
                                    <span>Moje pomiary</span>
                                </h3>
                            </div>
                            <div className="col-xs-6 text-right">
                                <button className="btn btn-primary btn-sm">Oblicz BMI</button>
                            </div>
                        </div>
                    </div>
                    <div className="block-content block-content-full">
                        <MeasurementData/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Measurement}