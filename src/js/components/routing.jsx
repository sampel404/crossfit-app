import React from 'react';
import {App} from './app.jsx';
import {
    HashRouter,
    Route,
    NavLink as Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import {Player} from './player.jsx';
import {Trainer} from './trainer.jsx';
import {Contact} from './contact.jsx';
import {Competition} from './competition.jsx';
import {CompetitionsTable} from './competitionsTable.jsx';
import {Results} from './results.jsx';
import {Records} from './records.jsx';
import {Profile} from './profile.jsx';
import {Measurement} from './measurement.jsx';


// const routes = [
//     {
//         path:'/',
//         exact: true,
//         component: () => <App />
//     },
// ]

class Routing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null,
            name: null
        }
    }
    componentDidMount(){
        const url = `https://crossfit-app-cl.firebaseio.com/players_${this.props.id}.json`;

        fetch(url).then(res => res.json())
            .then(res => {
                this.setState({
                    data: res[0],
                    name: res[0].name
                    })
                }
            );
    }
    render() {
        return <HashRouter>
            {/*nawigacja*/}
            <Switch>
                <Route exact path='/' component={() => <App />}/>
                <Route path='/player' component={()=><Player name={this.state.name} imgHeader="player"/>}/>
                <Route path='/trainer' component={Trainer}/>
                <Route path='/contact' component={()=><Contact name={this.state.name} imgHeader="contact"/>}/>
                <Route path='/competition' component={()=><Competition name={this.state.name} imgHeader="competition"/>}/>
                <Route path='/competitionsTable' component={()=><CompetitionsTable name={this.state.name} imgHeader="competitionsTable"/>}/>
                <Route path='/results' component={()=> <Results name={this.state.name} imgHeader="results"/>}/>
                <Route path='/records' component={()=> <Records data={this.state.data} imgHeader="records"/>}/>
                <Route path='/profile' component={()=> <Profile loggedAs={this.props.loggedAs} imgHeader="profile" />}/>
                <Route path='/measurement' component={()=><Measurement name={this.state.name} imgHeader="measurement"/>}/>
            </Switch>
        </HashRouter>;
    }
}

export {Routing}
