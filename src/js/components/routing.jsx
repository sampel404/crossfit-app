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

const Routing = () => {
    return  <HashRouter>
            <div>
             <Switch>
                 <Route exact path='/' component={App} />
                 <Route path='/player' component={Player}/>
                 <Route path='/trainer' component={Trainer}/>
                 <Route path='/contact' component={Contact} />
                 <Route path='/results' component={Results}/>
                 <Route path='/records' component={Records}/>
                 <Route path='/profile' component={Profile} />
                 <Route path='/measurement' component={Measurement} />

           </Switch>
           </div>
       </HashRouter>;
}

export {Routing}