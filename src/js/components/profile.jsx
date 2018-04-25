import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';


class Profile extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image />
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
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-user-1 text-primary push-15-r"></i>
                            <span>Profil użytkownika</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Imię" name="contact[first_name]"
                                           id="contact_first_name" value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Nazwisko" name="contact[last_name]"
                                           id="contact_last_name" value="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Telefon" name="contact[phone]" id="contact_phone"
                                           value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Data urodzenia" name="" id="contact_email"
                                           value="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-12">
                                <div className="form-group">
                                    <div className="input-wrapper select">
                                        <select className="form-control">
                                            <option>Level</option>
                                            <option>Begginer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="input-checkbox">
                                        <input className="form-control" type="checkbox" />
                                            <span><i className="icon-sl-fill icon-check-1"></i></span>
                                            Profil widoczny dla innych użytkowników
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Profile}