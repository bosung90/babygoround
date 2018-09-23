import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'

export default class DayColumn extends React.Component {
  render() {
    return (
      <View
        justifyCenter
        fill
        h={50}
        column
        alignEnd
        style={{ cursor: 'default', color: colors.PRIMARY }}
      >
        {this.props.day}
      </View>
    )
  }
}
