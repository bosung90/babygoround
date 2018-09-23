import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
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
import Success from './components/Success'
import Demand from './Demand/Demand'

ReactDOM.render(
  <Provider store={store}>
    <View fill column>
      <FirestoreSync />
      <Select
        selector={{
          isLoggedIn: dispatch.User.getIsLoggedIn,
          loading: state => state.User.loading || state.Equipments.loading,
        }}
      >
        {({ isLoggedIn, loading }) => {
          if (loading) return <View>Loading...</View>
          return isLoggedIn ? (
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
                  <Route exact path="/success" component={Success} />
                  <Route exact path="/profile" component={pages.Profile} />
                  <Route exact path="/demand" component={Demand} />
                </Switch>
              </div>
            </Router>
          ) : (
            <pages.Auth />
          )
        }}
      </Select>
    </View>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
