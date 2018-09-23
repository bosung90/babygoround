import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './history'
import { Header, View } from 'components'
import Select from 'cf-select'
import { Provider } from 'react-redux'
import { store, dispatch } from 'store'
import * as pages from 'pages'
import RegistrationFormOne from './components/RegistrationFormOne'
import RegistrationFormTwo from './components/RegistrationFormTwo'
import FirestoreSync from './FirestoreSync'

ReactDOM.render(
  <Provider store={store}>
    <View fill column>
      <FirestoreSync />
      <Select selector={dispatch.User.getIsLoggedIn}>
        {getIsLoggedIn =>
          getIsLoggedIn ? (
            <Router history={history}>
              <div>
                <Header />
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={() => <Redirect to="/form" />}
                  />
                  <Route exact path="/auth" component={pages.Auth} />
                  <Route exact path="/form" component={pages.Form} />
                  <Route exact path="/calendar" component={pages.Calendar} />
                  <Route
                    exact
                    path="/register"
                    component={RegistrationFormOne}
                  />
                  <Route exact path="/warehouse" component={pages.Warehouse} />
                  <Route
                    exact
                    path="/register2"
                    component={RegistrationFormTwo}
                  />
                </Switch>
              </div>
            </Router>
          ) : (
            <pages.Auth />
          )
        }
      </Select>
    </View>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
