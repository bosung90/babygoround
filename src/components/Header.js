import React from 'react'
import { css } from 'react-emotion'
import { View, Button } from 'components'
import { colors } from 'common'
import { headerLogo } from 'images'

export default class Header extends React.Component {
  render() {
    return (
      <View row alignCenter h={75} className={styles.header} justifyBetween>
        <Button className={styles.logoButton}>
          <img alt="header-logo" src={headerLogo} />
        </Button>
        <View row w={220} mr={20} justifyBetween>
          <Button secondary className={{ width: 100, height: 40 }}>
            Profile
          </Button>
          <Button secondary className={{ width: 100, height: 40 }}>
            Logout
          </Button>
        </View>
      </View>
    )
  }
}

const styles = {
  header: css({
    borderBottom: '1px solid',
    borderColor: colors.PRIMARY,
  }),
  logoButton: css({
    backgroundColor: 'transparent',
    width: 200,
  }),
}
