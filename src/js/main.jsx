import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './components/table.jsx';



class App extends React.Component{
    render(){
        return <Table/>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);