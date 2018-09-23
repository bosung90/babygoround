import React, { Component } from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from '../common/index'
import { firestore } from 'firebase/config'
import Select from 'cf-select'

class RegistrationFormTwo extends Component {
  state = {}
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>REQUIRED ITEMS</div>
        <div className={equip.container}>
          <Select selector={state => state.Equipments}>
            {Equipments => {
              if (!Equipments) return <div>Loading</div>
              const equipment = Object.values(Equipments)
              return equipment.map((item, index) => {
                return (
                  <Select key={index} selector={item.imageURL !== 'na'}>
                    <View row alignCenter>
                      <label htmlFor={item.id}>
                        <div className={equip.itemContainer}>
                          <div className={equip.wrapper}>
                            <img alt="itemImage" src={item.imageURL} />
                            <div className={equip.itemLabel}>{item.type}</div>
                          </div>
                        </div>
                      </label>
                      <input
                        type="checkbox"
                        className={equip.checkbox}
                        onChange={e =>
                          this.setState({ [item.id]: e.target.checked })
                        }
                        id={item.id}
                      />
                    </View>
                  </Select>
                )
              })
            }}
          </Select>
        </div>
        <div>
          <div className={styles.header}>Summary</div>
          <div className={summary.container}>
            <Select selector={state => state.Equipments}>
              {Equipments =>
                Object.keys(this.state).map((itemId, index) => {
                  return (
                    <Select key={index}>
                      <div className={styles.text}>
                        {this.state[itemId] === true
                          ? Equipments[itemId].type
                          : ''}
                      </div>
                      <div className={styles.line}>|</div>
                    </Select>
                  )
                })
              }
            </Select>
          </div>
        </div>

        <div className={endbutton.container}>
          <div className={endbutton.wrapper}>
            <button type="submit" className={endbutton.buttonInverse}>
              Previous
            </button>
          </div>
          <div className={endbutton.wrapper}>
            <button onClick={this.handleNext} className={endbutton.button}>
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
  handleNext = () => {
    const selectedRequestedItems = Object.keys(this.state)
    console.log(selectedRequestedItems)
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '5% 18%',
  }),
  header: css({
    fontSize: '24px',
    color: colors.PRIMARY,
    borderBottom: `1px solid ${colors.PRIMARY}`,
  }),
  text: css({
    fontSize: '16px',
    borderLeft: '2px',
    borderRadius: '5px',
    paddingRight: '2em',
    paddingLeft: '2em',
    color: colors.LIGHTGRAY,
  }),
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

const endbutton = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  wrapper: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  button: css({
    width: '130px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: colors.PRIMARY,
    border: 'none',
    margin: '1em',
  }),
  buttonInverse: css({
    width: '130px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '16px',
    margin: '1em',
    color: colors.PRIMARY,
    borderColor: colors.PRIMARY,
  }),
}

const summary = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
}

export default RegistrationFormTwo
