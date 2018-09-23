import React from 'react'
import { View, Button } from 'components'
import { firestore } from 'firebase/config'
import { getState, dispatch } from 'store'

export default class InventoryItem extends React.Component {
  render() {
    const { name } = this.props
    return (
      <View
        onClick={this.handleOnClick}
        pl={20}
        row
        mb={10}
        h={40}
        alignCenter
        justifyBetween
      >
        <View style={{ fontSize: 20 }}>{name}</View>
        <Button style={{ height: 40 }}>RETURN</Button>
      </View>
    )
  }
  handleOnClick = () => {
    const prevCheckedOutEquipments = getState().User.checkedOutEquipments
    const {
      [this.props.id]: _,
      ...newCheckedOutEqiupments
    } = prevCheckedOutEquipments
    firestore
      .collection('Users')
      .doc(dispatch.User.getUserId())
      .update({
        checkedOutEquipments: newCheckedOutEqiupments,
      })
  }
}
