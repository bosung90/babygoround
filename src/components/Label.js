import React from 'react'
import { View } from 'components'
import { colors } from 'common'

export default class Label extends React.Component {
  render() {
    return (
      <View
        column
        alignStretch
        mv={10}
        style={{ border: '0px solid ' + colors.PRIMARY, borderBottomWidth: 2 }}
      >
        <View style={{ color: colors.PRIMARY }}>{this.props.label}</View>
      </View>
    )
  }
}
