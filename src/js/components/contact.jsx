import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Image} from './bgimage.jsx';


class Contact extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image name={this.props.name} />
            <div className="container">
                <div className="separator double"></div>
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-mail-2 text-primary push-15-r"></i>
                            <span>Kontakt</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-1 col-xs-12">
                                <div className="form-group">
                                    <input type="text" placeholder="Imię" name="contact[first_name]"
                                           id="contact_first_name" value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Nazwisko" name="contact[last_name]"
                                           id="contact_last_name" value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Email" name="contact[email]" id="contact_email"
                                           value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Telefon" name="contact[phone]" id="contact_phone"
                                           value="" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Treść pytania" name="contact[message]" id="contact_message"
                                              className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block text-uppercase">Wyślij wiadomość
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-md-offset-2 col-xs-12">
                                <div className="reserved-contact">
                                    <div className="separator double"></div>
                                    <div className="row middle-xs">
                                        <div className="col-xs-size hidden-xs">
                                            <i className="icon-sl-outline icon-clock-2 text-primary font-s24"></i>
                                        </div>
                                        <div className="col-xs">
                                            <p className="font-s16"><span
                                                className="font-w500">12:00 - 16:00</span> (wtorek - czwartek)</p>
                                        </div>
                                    </div>
                                    <div className="separator half"></div>
                                    <div className="row middle-xs">
                                        <div className="col-xs-size hidden-xs">
                                            <i className="icon-sl-outline icon-call-1 text-primary font-s24"></i>
                                        </div>
                                        <div className="col-xs">
                                            <p className="font-w500 font-s16">+48 22 666 66 66</p>
                                        </div>
                                    </div>
                                    <div className="separator"></div>
                                    <div className="row middle-xs">
                                        <div className="col-xs-size hidden-xs">
                                            <i className="icon-sl-outline icon-mail-1 text-primary font-s24"></i>
                                        </div>
                                        <div className="col-xs">
                                            <a className="link link-primary font-s16"
                                               href="mailto:crossfitapp@gmail.com">crossfitapp@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Contact}