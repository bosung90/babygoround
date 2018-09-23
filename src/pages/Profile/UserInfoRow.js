import React from 'react'
import { View, Label } from 'components'
import { colors } from 'common'

export default class UserInfoRow extends React.Component {
  render() {
    const { label, value, ...props } = this.props
    return (
      <View row h={25} alignCenter style={{ marginBottom: 10 }}>
        <Label w={120} mr={35}>
          {label}
        </Label>
        <View>{value}</View>
      </View>
    )
  }
}
