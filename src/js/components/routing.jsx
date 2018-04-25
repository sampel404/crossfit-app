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
import {Results} from './results.jsx';
import {Records} from './records.jsx';
import {Profile} from './profile.jsx';
import {Measurement} from './measurement.jsx';

class Routing extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        const url = `https://crossfit-app-cl.firebaseio.com/players_${this.props.id}.json`;

        fetch(url).then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                    })
                }
            );

    }
    render() {
        return <HashRouter>
            {/*nawigacja*/}
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/player' component={Player}/>
                <Route path='/trainer' component={Trainer}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/results' component={()=> <Results data={this.state.data}/>}/>
                <Route path='/records' component={()=> <Records data={this.state.data}/>}/>
                <Route path='/profile' component={()=> <Profile loggedAs={this.props.loggedAs}/>}/>
                <Route path='/measurement' component={Measurement}/>
            </Switch>
        </HashRouter>;
    }
}

export {Routing}
