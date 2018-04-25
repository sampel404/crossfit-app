import React from 'react';
import { 
    Link
} from 'react-router-dom';

class Submenu extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <nav className="submenu-nav">
                <ul className="submenu-nav-list">
                    <li className="submenu-nav-list-el">
                        <Link to="/competitionsTable">
                            <i className="icon-sl-outline icon-goal-1 text-primary font-s36"></i>
                            <div className="separator half"></div>
                            Zawody
                        </Link>
                    </li>
                    {/*<li className="submenu-nav-list-el">*/}
                        {/*<Link to="/results">*/}
                            {/*<i className="icon-sl-outline icon-business-chart-2 text-primary font-s36"></i>*/}
                            {/*<div className="separator half"></div>*/}
                            {/*Moje wyniki*/}
                        {/*</Link>*/}
                    {/*</li>*/}
                    <li className="submenu-nav-list-el">
                        <Link to="/records">
                            <i className="icon-sl-outline icon-award-4 text-primary font-s36"></i>
                            <div className="separator half"></div>Moje rekordy
                        </Link>
                    </li>
                    <li className="submenu-nav-list-el">
                        <Link to="/measurement">
                            <i className="icon-sl-outline icon-calculator-3 text-primary font-s36"></i>
                            <div className="separator half"></div>Moje pomiary
                        </Link>
                    </li>
                    <li className="submenu-nav-list-el">
                        <Link to="/profile">
                            <i className="icon-sl-outline icon-profile-athlete text-primary font-s36"></i>
                            <div className="separator half"></div>Profil
                        </Link>
                    </li>
                </ul>
            </nav>
    }
}

export {Submenu}