import React from 'react'
import { View, Button } from 'components'
import { dispatch } from 'store'

export default class InventoryItem extends React.Component {
  render() {
    return (
      <View pl={20} row mb={10} h={40} alignCenter justifyBetween>
        <View style={{ fontSize: 20 }}>{this.props.name}</View>
        <Button style={{ height: 40 }}>RETURN</Button>
      </View>
    )
  }
}
