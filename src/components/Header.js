import React from 'react'
import { css } from 'react-emotion'
import { View, Button } from 'components'
import { colors } from 'common'
import * as images from 'images'

export default class Header extends React.Component {
  render() {
    return (
      <View row h={50} className={styles.header} justifyBetween>
        <Button className={styles.logoButton}>
          <img alt="logo" src={images.logo} />
        </Button>
        <View row>
          <Button className={styles.logoButton}>Logo</Button>
          <Button className={styles.logoButton}>Logo</Button>
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
    backgroundColor: colors.DISABLED,
    color: colors.PRIMARY,
    width: 200,
  }),
}
