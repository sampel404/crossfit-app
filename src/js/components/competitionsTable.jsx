import React from 'react';
import {
    Link
} from 'react-router-dom';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';


class CompetitionsTable extends React.Component{
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
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-goal-1 text-primary push-15-r"></i>
                            <span>Zawody</span>

                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <table className="table table-vcenter table-hover table-striped" width="100%">
                                    <thead>
                                        <tr>
                                            <th>Lp</th>
                                            <th>Nazwa</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>
                                                <Link to="/competition"
                                                      className="link link-effect">OPEN</Link></td>
                                            <td>12.03.2018</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>REGIONALS</td>
                                            <td>02.04.2018</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>CF3M</td>
                                            <td>22.04.2018</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-6 col-xs-12 text-center">
                                <div className="separator"></div>
                                <button className="banner-slide-btn btn-new">Dodaj zawody</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {CompetitionsTable}