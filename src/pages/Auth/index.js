import React from 'react'
import { css } from 'react-emotion'
import { View, Button, Input } from 'components'
import { loginLogo } from 'images'
import { auth } from 'firebase/config'

export default class Auth extends React.Component {
  render() {
    return (
      <View fill column center w={1000} h={500}>
        <View w={250}>
          <View style={{ marginBottom: 60, alignSelf: 'flex-end' }}>
            <img alt="login-logo" src={loginLogo} />
          </View>
        </View>
        <Input
          ref={r => (this.email = r)}
          style={{ marginBottom: 24 }}
          label={'Email'}
          w={450}
        />
        <Input
          ref={r => (this.password = r)}
          style={{ marginBottom: 33 }}
          label={'Password'}
          w={450}
        />
        <View row>
          <Button
            onClick={() => {
              console.log(this.email.value)
              auth
                .signInWithEmailAndPassword(
                  this.email.value,
                  this.password.value
                )
                .catch(e => {
                  console.error(e.message)
                })
            }}
            style={{ marginRight: 17, marginLeft: 90 }}
            primary
          >
            Login
          </Button>
          <Button
            onClick={() =>
              auth
                .createUserWithEmailAndPassword(
                  this.email.value,
                  this.password.value
                )
                .catch(e => {
                  console.error(e.message)
                })
            }
            secondary
          >
            Sign Up
          </Button>
        </View>
      </View>
    )
  }
}
