import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { firestore } from 'firebase/config'
import Select from 'cf-select'
import { dispatch } from 'store'

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    firestore
      .collection('Users')
      .get()
      .then(docs => {
        const users = []
        docs.forEach(doc => {
          const userId = doc.id
          const userData = doc.data()
          userData.id = userId
          users.push(userData)
        })
        this.setState({ users })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {this.state.users.map(user => {
            return <span key={user.id}>{user.name}</span>
          })}
        </p>
        <Select selector={state => state.count} />
        <button onClick={() => dispatch.count.increment(1)}>
          Increment Count
        </button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
