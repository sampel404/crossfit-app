import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import items from './items';


class Player extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image name={this.props.name} imgHeader={this.props.imgHeader} />
            <div className="container">
                <div className="separator double"></div>
                <Submenu />
                <div className="separator double"></div>

                <div className="row">
                    <div className="col-xs-4">
                        <div className="block">
                            <div className="block-content block-content-full text-center">
                                <i className="icon-sl-outline icon-award-4 text-primary font-s36 hidden"></i>
                                <h3 className="text-uppercase font-w300 font-s20">Ukończone WOD-y</h3>
                                <div className="font-s60 text-primary font-w300">63</div>
                                <div className="separator half"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="block">
                            <div className="block-content block-content-full text-center">
                                <i className="icon-sl-outline icon-award-4 text-primary font-s36 hidden"></i>
                                <h3 className="text-uppercase font-w300 font-s20">Nowe rekordy</h3>
                                <div className="font-s60 text-primary font-w300">3</div>
                                <div className="separator half"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="block">
                            <div className="block-content block-content-full text-center">
                                <i className="icon-sl-outline icon-award-4 text-primary font-s36 hidden"></i>
                                <h3 className="text-uppercase font-w300 font-s20">Ulubiony WOD</h3>
                                <div className="font-s60 text-primary font-w300">18.5</div>
                                <div className="separator half"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Player}