import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Label } from 'components'

export default class Input extends React.Component {
  render() {
    const { label, style, ...props } = this.props
    return (
      <View alignCenter style={style} row justifyBetween {...props}>
        <Label>{label}</Label>
        <View>
          <input className={styles.input} />
        </View>
      </View>
    )
  }
}

const styles = {
  input: css({
    height: 35,
    width: 350,
    fontSize: 16,
  }),
}
