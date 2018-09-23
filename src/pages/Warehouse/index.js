import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input, Label } from 'components'
import { dispatch } from 'store'
import InventoryItem from './InventoryItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import UserInfoRow from './UserInfoRow'

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
              <Label />
              <UserInfoRow />
              <UserInfoRow />
              <UserInfoRow />
              <UserInfoRow />
            </View>
          </View>
          <View column mv={30} pl={10}>
            Request
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
          </View>

          <View column pl={10}>
            User Inventory
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
            <InventoryItem />
          </View>
        </View>
      </View>
    )
  }
}
