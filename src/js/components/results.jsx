import React from 'react';
import {HeaderBlack} from './headerBlack.jsx';
import {Menu} from './menu.jsx';
// import {Submenu} from './submenu.jsx';
import {Image} from './bgimage.jsx';
import config from '../config.js';


const menuObject = [
    {
        urL         :   '/competitionsTable',
        icon        :   'icon-goal-1',
        text        :   'Zawody',
        isVisible   :   config.loggedAs == 'trainer'
    },
    {
        urL         :   '/results',
        icon        :   'icon-business-chart-2',
        text        :   'Moje wyniki',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/records',
        icon        :   'icon-award-4',
        text        :   'Moje rekordy',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/measurement',
        icon        :   'icon-calculator-3',
        text        :   'Moje pomiary',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    },
    {
        urL         :   '/profile',
        icon        :   'icon-profile-athlete',
        text        :   'Profil',
        isVisible   :   config.loggedAs == 'trainer' ? true : false
    }
];

class Results extends React.Component{
    render(){
        return <div>
            <HeaderBlack />
            <Image name={this.props.name} imgHeader={this.props.imgHeader} />

            <div className="container">
                <div className="separator double"></div>
                {/*<Submenu />*/}
                <Menu menu = {menuObject}/>
                <div className="separator double"></div>
                <div className="block">
                    <div className="block-header">
                        <h3 className="block-title">
                            <i className="icon-sl-outline icon-award-3 text-primary push-15-r"></i>
                            <span>Moje wyniki</span>
                        </h3>
                    </div>
                    <div className="block-content block-content-full">
                        <table className="table table-hover" width="100%">
                            <thead>
                            <tr className="headers">
                                <th className="">Zawody</th>
                                <th className="">Data</th>
                                <th className="">Wynik</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>OPEN 2018</td>
                                <td>12.01.2018</td>
                                <td><strong>3</strong> miejsce</td>
                            </tr>
                            <tr>
                                <td>CROSS CORE</td>
                                <td>16.02.2018</td>
                                <td><strong>4</strong> miejsce</td>
                            </tr>
                            <tr>
                                <td>MARINA</td>
                                <td>18.04.2018</td>
                                <td><strong>6</strong> miejsce</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export {Results}