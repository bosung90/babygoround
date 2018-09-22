import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import { Header } from 'components'

ReactDOM.render(
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/something" component={App} />
        {/* <Route path="/something" component={add your component here}/> */}
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
