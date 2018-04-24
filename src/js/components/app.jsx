import React from 'react';
import {Header} from './header.jsx';
import {Intro} from './intro.jsx';



class App extends React.Component {

    render() {
        return <div>
            <Header />
            <Intro />
        </div>
    }
}

export {App}