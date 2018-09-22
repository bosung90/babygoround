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

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/something" component={App} />
          {/* <Route path="/something" component={add your component here}/> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
