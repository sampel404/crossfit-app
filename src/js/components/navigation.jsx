import React from 'react';
import { 
    Link
} from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return <nav className="page-nav">
                <ul className="page-nav-list">
                    <li className="page-nav-list-el">
                        <Link className="page-nav-list-link red" to="/">Załóż konto</Link>
                    </li>
                    <li className="page-nav-list-el">
                        <Link className="page-nav-list-link" to="/player">Strefa zawodnika</Link>
                    </li>
                    <li className="page-nav-list-el">
                        <Link className="page-nav-list-link" to="/trainer">Strefa trenera</Link>
                    </li>
                    <li className="page-nav-list-el">
                        <Link className="page-nav-list-link" to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>
    }
}

export {Navigation}