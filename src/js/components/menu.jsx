import React from 'react';
import {
    Link
} from 'react-router-dom';
// import submenu from './submenu.js';
import config from '../config.js';



class Menu extends React.Component {
    render() {
        console.log("config",this.props.menu)
        return (
            <nav className="submenu-nav">
                <ul className="submenu-nav-list">
                    {this.props.menu.map((el,i) => {
                        return (
                            <li className="submenu-nav-list-el" key={i}>
                                <Link to={el.urL}>
                                    <i className={`icon-sl-outline ${el.icon} text-primary font-s36`}></i>
                                    <div className="separator half"></div>{el.text}
                                    </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export {Menu}