import React from 'react';
import {Navigation} from './navigation.jsx';

class HeaderBlack extends React.Component{

    render(){
        return <header className="page-header black">

                <div className="container">
                    <a href="/" className="page-logo">
                        <strong>CrossFit</strong> App
                    </a>

                    <Navigation />

                </div>
            </header>;
    }
}

export {HeaderBlack}