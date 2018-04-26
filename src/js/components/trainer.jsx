import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';



class Trainer extends React.Component{
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
                            <i className="icon-sl-outline icon-user-edit-2 text-primary push-15-r"></i>
                            <span>Edytuj Profil</span>
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

export {Trainer}