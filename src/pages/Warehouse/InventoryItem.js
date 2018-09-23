import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input } from 'components'
import { dispatch } from 'store'

export default class InventoryItem extends React.Component {
  render() {
    return (
      <View pl={20} row mt={10} h={50} alignCenter justifyBetween>
        <View>{this.props.name}</View>
        <Button>RETURN</Button>
      </View>
    )
  }
}
