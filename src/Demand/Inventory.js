import React, { Component } from 'react'
import { css } from 'react-emotion'
import Select from 'cf-select'
import { colors } from '../common/index'

class Inventory extends Component {
  contains(arr, val) {
    console.log(arr[val], val)
    for (const i in arr) {
      if (i.id == 'val') {
        return i
      }
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>Items in demand</div>
        <div className={equip.container}>
          <Select selector={state => state.User}>
            {User => {
              if (!User) return <div>Loading</div>
              console.log(User)
              const items = Object.keys(User.requestedEquipments)
              return items.map((item, index) => {
                return (
                  <Select selector={state => state.Equipments}>
                    {Equipments => {
                      if (!Equipments) return <div>Loading</div>
                      // const equips = Object.keys(Equipments);
                      const foundItem = Equipments[item]
                      return (
                        <div className={equip.wrapper}>
                          <Select
                            selector={
                              item.imageURL !== 'na' || item === 'loading'
                            }
                          >
                            <div className={equip.imageContainer}>
                              <img src={foundItem.imageURL} />
                            </div>
                            <div className={count.container}>
                              {foundItem.count}
                            </div>
                          </Select>
                        </div>
                      )
                    }}
                  </Select>
                )
              })
            }}
          </Select>
        </div>
      </div>
    )
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 18%',
  }),
  header: css({
    fontSize: '24px',
    color: colors.PRIMARY,
    borderBottom: `1px solid ${colors.PRIMARY}`,
    marginTop: '3em',
  }),
}

const count = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    border: '1px solid lightgray',
    color: 'lightgray',
  }),
}

const equip = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '2em 4em 0 4em',
  }),
  wrapper: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  imageContainer: css({
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100px',
    height: '100px',
    justifyContent: 'center',
    margin: '1em',
  }),
}

export default Inventory
