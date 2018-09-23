import React from 'react'
import { css } from 'react-emotion'
import { View, Button } from 'components'
import { colors } from 'common'
import * as images from 'images'

export default class Header extends React.Component {
  render() {
    return (
      <View row alignCenter h={75} className={styles.header} justifyBetween>
        <Button className={styles.logoButton}>
          <img alt="logo" src={images.logo} />
        </Button>
        <View row w={220} mr={20} justifyBetween>
          <Button secondary>Profile</Button>
          <Button secondary>Logout</Button>
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
