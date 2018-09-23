import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'

export default class Item extends React.Component {
  render() {
    return (
      <View
        className={styles.button}
        ml={-1}
        mt={-1}
        w={105.85}
        h={67}
        bc="grey"
        bw={1}
      >
        <View fill alignEnd column p={4}>
          {this.props.dateNumber}
        </View>
      </View>
    )
  }
}

const styles = {
  button: css({
    cursor: 'pointer',
    display: 'flex',
  }),
}
