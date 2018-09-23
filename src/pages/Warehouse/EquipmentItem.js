import React from 'react'
import { View, Button } from 'components'
import { colors } from 'common'
import { dispatch, getState } from 'store'
import { firestore } from 'firebase/config'

export default class EquipmentItem extends React.Component {
  render() {
    const { mr, equipment, name } = this.props
    return (
      <View
        onClick={() => {
          const checkedOutEquipments = getState().User.checkedOutEquipments
          const requestedEquipments = getState().User.requestedEquipments
          const {
            [equipment.id]: _,
            ...newRequestedEquipments
          } = requestedEquipments
          firestore
            .collection('Users')
            .doc(dispatch.User.getUserId())
            .update({
              requestedEquipments: newRequestedEquipments,
              checkedOutEquipments: {
                ...checkedOutEquipments,
                [equipment.id]: true,
              },
            })
        }}
        mr={mr}
        column
        alignCenter
      >
        {equipment.imageURL ? (
          <img
            style={{
              maxWidth: 105,
              maxHeight: 105,
            }}
            alt={name}
            src={equipment.imageURL}
          />
        ) : (
          <View w={105} h={105} bg={colors.LIGHTGRAY} />
        )}
        <View mt={10}>{name}</View>
      </View>
    )
  }
}
