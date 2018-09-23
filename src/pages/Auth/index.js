import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'
import { loginLogo } from 'images'
import { dispatch } from 'store'

export default class Auth extends React.Component {
  render() {
    return (
      <View fill column center w={1000} h={500}>
        {/* <div className={styles.loginButton}>Login</div> */}
        <View w={250}>
          <View style={{ marginBottom: 60, alignSelf: 'flex-end' }}>
            <img alt="login-logo" src={loginLogo} />
          </View>
        </View>
        <Input style={{ marginBottom: 24 }} label={'Username'} w={450} />
        <Input style={{ marginBottom: 33 }} label={'Password'} w={450} />
        <View row>
          <Button
            style={{ marginRight: 17, marginLeft: 90 }}
            onClick={() => console.log('login')}
            primary
          >
            Login
          </Button>
          <Button onClick={() => console.log('signUp')} secondary>
            Sign Up
          </Button>
        </View>
        {/* <div className={styles.loginButton}>Sign Up</div> */}
      </View>
    )
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),
}
