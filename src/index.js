import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import { Header } from 'components'
import { Provider } from 'react-redux'
import { store } from 'store'
import * as pages from 'pages'
import RegistrationFormOne from './components/RegistrationFormOne'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/something" component={App} />
          <Route exact path="/auth" component={pages.Auth} />
          <Route exact path="/form" component={pages.Form} />
          <Route exact path="/calendar" component={pages.Calendar} />
          <Route exact path="/register" component={RegistrationFormOne} />
          <Route exact path="/warehouse" component={pages.Warehouse} />

          {/* <Route path="/something" component={add your component here}/> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
