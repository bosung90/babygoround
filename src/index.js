import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history'
import { Header } from 'components'
import { Provider } from 'react-redux'
import { store } from 'store'
import * as pages from 'pages'
import RegistrationFormOne from './components/RegistrationFormOne'
import RegistrationFormTwo from './components/RegistrationFormTwo'
import FirestoreSync from './FirestoreSync';
import View from './components/View';

<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

=======
>>>>>>> a0397ca7403a13503f5e436aa78b2f5d1dcf91e9
ReactDOM.render(
  <Provider store={store}>
    <View fill column>
      <FirestoreSync />
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/auth" />} />
            <Route exact path="/auth" component={pages.Auth} />
            <Route exact path="/form" component={pages.Form} />
            <Route exact path="/calendar" component={pages.Calendar} />
            <Route exact path="/register" component={RegistrationFormOne} />
            <Route exact path="/warehouse" component={pages.Warehouse} />
            <Route exact path="/register2" component={RegistrationFormTwo} />
          </Switch>
        </div>
      </Router>
    </View>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
