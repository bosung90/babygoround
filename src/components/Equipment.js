import React from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from 'common'
import Select from 'cf-select'

export default class Equipment extends React.Component {
  render() {
    const { style, className, equipment, checkbox, ...props } = this.props
    return (
      <View className={equip.itemContainer} row>
        <View className={equip.wrapper} col>
          <img alt={equipment.id} src={equipment.imageURL} />
          <View className={equip.itemLabel}>{equipment.type}</View>
        </View>
        <Select selector={checkbox}>
          <input
            type="checkbox"
            className={equip.checkbox}
            onChange={e =>
              this.setState({ [equipment.type]: e.target.checked })
            }
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
