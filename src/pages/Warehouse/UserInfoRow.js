import React from 'react'
import { View } from 'components'
import { colors } from 'common'

export default class UserInfoRow extends React.Component {
  render() {
    const { label, value, ...props } = this.props
    return (
      <View row h={25} alignCenter style={{ marginBottom: 10 }}>
        <View w={120} mr={35} style={{ textAlign: 'end', color: colors.LABEL }}>
          {label}
        </View>
        <View>{value}</View>
      </View>
    )
  }
}
