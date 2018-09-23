import React, { Component } from 'react'
import { css } from 'react-emotion'
import { colors } from '../common/index'
import { firestore } from 'firebase/config'
import Select from 'cf-select'
import { Progress, View } from 'components'
import { dispatch } from 'store'

class RegistrationFormTwo extends Component {
<<<<<<< HEAD
    render() {
        return(
            <div className={ styles.container }>
                <div className={ styles.header }>REQUIRED ITEMS</div>
                    {/* { equipList } */}
                    <div className={equip.container}>
                        <Select selector={state=>state.Equipments}>
                            {Equipments =>  {
                                if(!Equipments) return <div>Loading</div>;
                                const equipment = Object.values(Equipments)
                                console.log(equipment);
                                return (
                                    equipment.map((item, index) => {
                                        return(
                                            <Select selector={item.imageURL != "na"}>
                                                <div className={equip.itemContainer}>
                                                    <div className={ equip.wrapper }>
                                                        <img src={item.imageURL} />
                                                        <div className={ equip.itemLabel }>{item.type}</div>
                                                    </div>
                                                </div>
                                                <input type="checkbox" className={ equip.checkbox } onChange={(e) => this.setState({ [item.type]: e.target.checked }) }/>
                                            </Select>
                                        )
                                    })
                                )
                                console.log(Equipments);
                                console.log(equipment);

                            }}
                        </Select>
                    </div>
                    <div>
                        <div className={ styles.header }>Summary</div>
                            <div className={ summary.container}>
                                <Select selector={this.state !== null}>
                                    { this.state !== null ? Object.keys(this.state).map((item, index) => {
                                        return(
                                            <Select>
                                                <div className={ summary.text }>{this.state[item] === true ? item : ""}</div>
                                            </Select>
                                                
                                        )
                                    }): "Please select your items"}
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
                            <button type="submit" className={endbutton.button}>
                            Next
                            </button>
=======
  state = {}
  render() {
    return (
      <div className={styles.container}>
        <Progress pagenum={2} />
        <div className={styles.header} style={{ marginTop: 20 }}>
          REQUIRED ITEMS
        </div>
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
>>>>>>> b9b752f59ccfe8a4cb71a261cc9af1dd6de7d53e
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
      .update({ requestedUserItems: this.state })
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
<<<<<<< HEAD
    container: css({
        marginTop: "0.5em",
        display: "flex",
        flexDirection: "row",
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
        container:css({
            margin: '2em 10% 0 10%',
            display:"flex", 
            flexDirection:"row",
            flexWrap: "wrap",
            color: colors.LIGHTGRAY
      }),
        text: css({
            marginBottom: '1em',
            paddingRight: '20px',
            paddingLeft: '20px',
            borderRight: `1px solid ${colors.PRIMARY}`,
      })
  }

export default RegistrationFormTwo;
=======
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
>>>>>>> b9b752f59ccfe8a4cb71a261cc9af1dd6de7d53e

const summary = {
  container: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }),
}

export default RegistrationFormTwo
