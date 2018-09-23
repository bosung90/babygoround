import React from 'react'
import { View, Button } from 'components'
import { colors } from 'common'
import { dispatch } from 'store'

export default class EquipmentItem extends React.Component {
  render() {
    const { mr, name } = this.props
    return (
      <View mr={mr} column alignCenter>
        <View w={105} h={105} bg={colors.LIGHTGRAY} />
        <View mt={10}>{name}</View>
      </View>
    )
  }
}
