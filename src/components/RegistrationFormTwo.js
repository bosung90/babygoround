import React, { Component } from 'react'
import { css } from 'react-emotion'
import { colors } from '../common/index'
import { firestore } from 'firebase/config'
import Select from 'cf-select'
import { Progress, View } from 'components'
import { dispatch } from 'store'

class RegistrationFormTwo extends Component {
  state = {}
  render() {
    return (
      <div className={styles.container}>
        <Progress pagenum={2} />
        <div className={styles.header}>REQUIRED ITEMS</div>
        <div className={equip.container}>
          <Select selector={state => state.Equipments}>
            {Equipments => {
              if (!Equipments) return <div>Loading</div>
              const equipmentKeys = Object.keys(Equipments)
              return equipmentKeys.map((itemId, index) => (
                <Select
                  key={index}
                  selector={
                    Equipments[itemId].imageURL !== 'na' && itemId !== 'loading'
                  }
                >
                  <View row alignCenter>
                    <label htmlFor={itemId}>
                      <div className={equip.itemContainer}>
                        <div className={equip.wrapper}>
                          <img
                            alt="equipment"
                            src={Equipments[itemId].imageURL}
                          />
                          <div className={equip.itemLabel}>
                            {Equipments[itemId].type}
                          </div>
                        </div>
                      </div>
                    </label>
                    <input
                      type="checkbox"
                      className={equip.checkbox}
                      onChange={e =>
                        this.setState({ [itemId]: e.target.checked })
                      }
                      id={itemId}
                    />
                  </View>
                </Select>
              ))
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
                      <div className={summary.text}>
                        {this.state[itemId] === true
                          ? Equipments[itemId].type
                          : ''}
                      </div>
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
            <button
              onClick={this.handleNext}
              type="submit"
              className={endbutton.button}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }
  handleNext = () => {
    firestore
      .collection('Users')
      .doc(dispatch.User.getUserId())
      .update({ requestedEquipmentItems: this.state })
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
    margin: '5em, 10%, 0, 10%',
  }),
  text: css({
    color: colors.LIGHTGRAY,
    borderRight: '1px solid', 
    borderColor: colors.PRIMARY,
    paddingRight: '2em',
    PaddingLeft: '2em',

  })
}

export default RegistrationFormTwo
