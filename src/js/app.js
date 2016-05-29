import '../css/styles.styl';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router'

import routes from './routes/';

//Start app
render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.querySelector('#app'));
