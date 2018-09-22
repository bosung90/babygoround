import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View } from 'components'

export default class Auth extends React.Component {
  render() {
    return (
      <View fill column center w={700}>
        <div className={styles.loginButton}>Login</div>
        <div className={styles.loginButton}>Sign Up</div>
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
    backgroundColor: colors.SECONDARY,
    width: 150,
    height: 50,
  }),
}
