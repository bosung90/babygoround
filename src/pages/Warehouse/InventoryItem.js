import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'
import { dispatch } from 'store'

export default class InventoryItem extends React.Component {
  render() {
    return (
      <View row mt={10} h={50} alignCenter justifyBetween>
        <View>ITEM NAME</View>
        <Button>RETURN</Button>
      </View>
    )
  }
}
