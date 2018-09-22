import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View } from 'components'

export default class Input extends React.Component {
  render() {
    const label = this.props.label
    return (
      <View>
        {label}
        <input className={styles.input} />
      </View>
    )
  }
}

const styles = {
  input: css({
    height: 35,
    width: 150,
  }),
}
