import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input, Label } from 'components'
import { dispatch } from 'store'
import InventoryItem from './InventoryItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import UserInfoRow from './UserInfoRow'

import { firestore } from 'firebase/config'

export default class Warehouse extends React.Component {
  state = { checkedOutEquipments: [], requestedEquipments: [] }
  // static getDerivedStateFromProps(props, state) {

  // }
  componentDidMount() {
    firestore
      .collection('Users')
      .doc('pDvyJvfpwpUyo3NPc5nG')
      .get()
      .then(doc => {
        const userData = doc.data()
        const {
          checkedOutEquipments: checkedOutEquipmentIds,
          requestedEquipments: requestedEquipmentIds,
        } = userData

        const checkedOutEquipments = []
        const requestedEquipments = []

        firestore.collection('Equipments').doc()

        console.log(doc.data())
      })
  }
  render() {
    return (
      <View alignCenter column>
        <View column h={1024 - 75} w={650} mt={50}>
          <View row>
            <View
              mt={30}
              flex
              mr={40}
              h={200}
              w={200}
              br={100}
              bw={3}
              bc={colors.PRIMARY}
              center
            >
              <FontAwesomeIcon icon={faUser} color={colors.PRIMARY} size="9x" />
            </View>
            <View column fill>
              <Label label="USER INFORMATION" />
              <UserInfoRow label="First Name" value="Jon" />
              <UserInfoRow label="Last Name" value="Snow" />
              <UserInfoRow label="Phone Number" value="(604)555-5555" />
              <UserInfoRow label="Email Address" value="jon.snow@gmail.com" />
              <UserInfoRow label="Date of Birth" value="1978/06/24" />
            </View>
          </View>
          <View column mv={30} pl={10}>
            <Label label="BABY INFORMATION" />
            <UserInfoRow label="Date of Birth" value="2018/11/24" />
          </View>

          <View column pl={10}>
            <Label label="REQUESTED ITEMS" />

            <InventoryItem name="Stroller" />
            <InventoryItem name="Puzzle" />
            <InventoryItem name="Diaper" />
            <InventoryItem name="Bottle" />
          </View>

          <View column pl={10}>
            <Label label="CHECKED OUT ITEMS" />
          </View>
          <View column pl={10}>
            <Label label="APPOINTMENTS" />
          </View>
        </View>
      </View>
    )
  }
}
