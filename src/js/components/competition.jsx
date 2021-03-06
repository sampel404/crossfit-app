import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import {Table} from './table.jsx';


class Competition extends React.Component{
    render(){
        // let url = this.props.match.url;
        // let arrUrl = url.split("/");
        // const lastPram = arrUrl[arrUrl.length-1];
        //
        // console.log("tyty", lastPram)

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
                            <span>OPEN wyniki - 12.03.2018</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <Table/>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Competition}