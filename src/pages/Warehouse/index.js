import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input, Label } from 'components'
import InventoryItem from './InventoryItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import UserInfoRow from './UserInfoRow'
import Select from 'cf-select'
import EquipmentItem from './EquipmentItem'

export default class Warehouse extends React.Component {
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
              <UserInfoRow
                label="First Name"
                value={<Select selector={state => state.User.firstName} />}
              />
              <UserInfoRow
                label="Last Name"
                value={<Select selector={state => state.User.lastName} />}
              />
              <UserInfoRow
                label="Phone Number"
                value={<Select selector={state => state.User.phoneNumber} />}
              />
              <UserInfoRow
                label="Email Address"
                value={<Select selector={state => state.User.email} />}
              />
              <UserInfoRow
                label="Date of Birth"
                value={
                  <Select selector={state => state.User.dateOfBirthUser} />
                }
              />
            </View>
          </View>
          <View column mv={30} pl={10}>
            <Label label="BABY INFORMATION" />
            <UserInfoRow
              label="Date of Birth"
              value={<Select selector={state => state.User.dateOfBirthBaby} />}
            />
          </View>

          <View column pl={10}>
            <Label label="REQUESTED ITEMS" />
            <View row wrap mv={16}>
              <Select
                selector={state => {
                  if (!state.User.requestedEquipments) return null
                  const requestedEquipments = Object.keys(
                    state.User.requestedEquipments
                  )

                  return requestedEquipments.map(requestedEquipId => ({
                    ...state.Equipments[requestedEquipId],
                    id: requestedEquipId,
                  }))
                }}
              >
                {requestedEquipmentsWithData => {
                  if (!requestedEquipmentsWithData)
                    return <View>Loading...</View>
                  return requestedEquipmentsWithData.map((equipment, index) => (
                    <EquipmentItem
                      mr={index % 4 === 3 ? 0 : 70}
                      key={equipment.id}
                      name={equipment.type}
                    />
                  ))
                }}
              </Select>
            </View>
          </View>

          <View column pl={10}>
            <Label label="CHECKED OUT ITEMS" />
            <Select
              selector={state => {
                if (!state.User.checkedOutEquipments) return null
                const checkedOutEquipments = Object.keys(
                  state.User.checkedOutEquipments
                )
                return checkedOutEquipments.map(checkedOutEquipId => ({
                  ...state.Equipments[checkedOutEquipId],
                  id: checkedOutEquipId,
                }))
              }}
            >
              {checkedOutEquipmentsWithData => {
                if (!checkedOutEquipmentsWithData)
                  return <View>Loading...</View>
                return checkedOutEquipmentsWithData.map(equipment => (
                  <InventoryItem
                    key={equipment.id}
                    id={equipment.id}
                    name={equipment.type}
                  />
                ))
              }}
            </Select>
          </View>
          <View column pl={10}>
            <Label label="APPOINTMENTS" />
          </View>
        </View>
      </View>
    )
  }
}
