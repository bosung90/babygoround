import React from 'react'
import { css } from 'react-emotion'
import { View, Button, Input } from 'components'
import { loginLogo } from 'images'
import { withRouter } from 'react-router-dom'

export default withRouter(
  class Auth extends React.Component {
    render() {
      return (
        <View fill column center w={1000} h={500}>
          <View w={250}>
            <View style={{ marginBottom: 60, alignSelf: 'flex-end' }}>
              <img alt="login-logo" src={loginLogo} />
            </View>
          </View>
          <Input style={{ marginBottom: 24 }} label={'Username'} w={450} />
          <Input style={{ marginBottom: 33 }} label={'Password'} w={450} />
          <View row>
            <Button
              onClick={() => this.props.history.push('/form')}
              style={{ marginRight: 17, marginLeft: 90 }}
              primary
            >
              Login
            </Button>
            <Button onClick={() => this.props.history.push('/form')} secondary>
              Sign Up
            </Button>
          </View>
        </View>
      )
    }
  }
)
