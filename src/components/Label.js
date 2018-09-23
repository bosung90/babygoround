import React from 'react'
import { View } from 'components'
import { colors } from 'common'

export default class Label extends React.Component {
  render() {
    return (
      <View
        column
        alignStretch
        style={{ border: '0px solid ' + colors.PRIMARY, borderBottomWidth: 1 }}
      >
        <View style={{ color: colors.PRIMARY }}>SET AN APPOINTMENT</View>
      </View>
    )
  }
}
