import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'
import { dispatch } from 'store'

export default class Calendar extends React.Component {
  render() {
    return (
      <View h={1024 - 75} bg={colors.DISABLED}>
        Calendar
      </View>
    )
  }
}
