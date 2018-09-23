import React from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from 'common'
import Select from 'cf-select'

export default class Equipment extends React.Component {
  render() {
    // const { style, className, equipment, checkbox, ...props } = this.props
    const { style, className, equipment, checkbox, mr, ...props } = this.props
    return (
      <View mr={mr} column alignCenter>
        <View w={105} h={105}>
          <img alt={equipment.type} src={equipment.imageURL} />
        </View>
        <View mt={10} className={equip.itemLabel}>
          {equipment.type}
        </View>
        <Select selector={checkbox}>
          <input
            type="checkbox"
            className={equip.checkbox}
            // onChange={e => this.setState({ [equipment.id]: e.target.checked })}
          />
        </Select>
      </View>
    )
  }
}

const equip = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '0 12%',
  }),
  itemContainer: css({
    display: 'flex',
    flexDirection: 'row',
    margin: '1em',
    alignItems: 'center',
  }),
  itemWrapper: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100px',
    height: '100px',
  }),
  itemLabel: css({
    color: colors.LIGHTGRAY,
    textAlign: 'center',
    fontSize: '14px',
    fontFamily: "'Lato', sans-serif",
    fontWeight: '300',
  }),
  item: css({
    margin: '0.25em',
  }),
  checkbox: css({
    height: '1em',
    width: '1em',
    border: '1px solid lightgray',
    cursor: 'pointer',
  }),
}
