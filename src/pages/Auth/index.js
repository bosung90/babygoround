import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'
import { dispatch } from 'store'

export default class Auth extends React.Component {
  render() {
    return (
      <View fill column center w={700}>
        {/* <div className={styles.loginButton}>Login</div> */}
        <View row center />
        <Input label={'Username'} />
        <Input label={'Password'} />
        <View row>
          <Button onClick={() => console.log('login')}>Login</Button>
          <Button onClick={() => console.log('signUp')}>Sign Up</Button>
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
  loginButton: css({
    backgroundColor: colors.PRIMARY,
    width: 150,
    height: 50,
  }),
}
