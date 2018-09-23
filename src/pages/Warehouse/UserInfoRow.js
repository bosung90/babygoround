import React from 'react'
import { View } from 'components'

export default class UserInfoRow extends React.Component {
  render() {
    return (
      <View row h={55} alignCenter>
        <View w={120} mr={35} style={{ textAlign: 'end' }}>
          First name
        </View>
        <View>Jon</View>
      </View>
    )
  }
}
