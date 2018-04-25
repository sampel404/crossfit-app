import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';


class Results extends React.Component{
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
                            <span>Moje wyniki</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Results}