import React from 'react';
// import {Submenu} from './submenu.jsx';


class Image extends React.Component{
    render(){
        return <div className="bg-image overflow-hidden">
            <div className="bg-black-op">
                <div className="content content-narrow">
                    <div className="block block-no-margin block-transparent">
                        <div className="block-content block-content-full">
                            <h1 className="h1 font-w500 text-white text-capitalize animated fadeInDown push-20">Kontakt</h1>
                            <h2 className="h4 font-w300 text-white animated fadeInUp">Witaj {this.props.name}!</h2>
                        </div>
                        {/*<Submenu />*/}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Image}