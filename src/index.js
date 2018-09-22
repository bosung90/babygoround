import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

ReactDOM.render(
    <Router history={ history }>
        <div>
            /* This will be some default component that will show for all pages
             * e.g Header
             */
            <Switch>
                <Route exact path="/something" component={ App }/>
                {/* <Route path="/something" component={add your component here}/> */}
            </Switch>
        </div>
    </Router>
    , document.getElementById('root'));
    registerServiceWorker();
