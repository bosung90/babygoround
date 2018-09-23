import React, { Component } from 'react'
import { css } from 'react-emotion'
import { colors } from '../common/index'
import Select from 'cf-select'
import { withRouter } from 'react-router-dom'
import { firestore } from 'firebase/config'
import { dispatch, getState } from 'store'

export default withRouter(
  class RegistrationFormOne extends Component {
    state = {
      firstName: getState().User.firstName,
      lastName: getState().User.lastName,
      phoneNum: getState().User.phoneNumber,
      DOBUser: getState().User.dateOfBirthUser,
      email: getState().User.email,
      DOBBaby: getState().User.dateOfBirthBaby,
      socioGraphic: getState().User.socioGraph || {},
      otherChecked: !!getState().User.socioGraph['other'],
    }
    handleSubmit = e => {
      e.preventDefault()
      const {
        DOBUser: dateOfBirthUser,
        firstName,
        lastName,
        phoneNum: phoneNumber,
        email,
        socioGraphic: socioGraph,
        DOBBaby: dateOfBirthBaby,
      } = this.state

      firestore
        .collection('Users')
        .doc(dispatch.User.getUserId())
        .set(
          {
            dateOfBirthUser,
            firstName,
            lastName,
            phoneNumber,
            email,
            socioGraph,
            dateOfBirthBaby,
          },
          { merge: true }
        )
        .then(() => {
          this.props.history.push('/register2')
        })

      console.log('Submit has been pressed')
    }

    handleOnClick = () => {
      console.log('Submit has been pressed')
      const temp = !this.state.otherChecked
      this.setState({
        otherChecked: temp,
      })
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className={styles.container}>
          <div className={styles.userContainer}>
            <div className={userProfile.container}>
              {/*This is gonan be the user profile section*/}
              <img alt="profile" src={require('../images/profile.svg')} />
              <p>Profile picture</p>
              <button
                className={userProfile.button}
                style={{ width: '70%' }}
                type="Input"
              >
                Select Image
              </button>
            </div>
            <div className={user.container}>
              <div className={user.wrapper}>
                <h3 className={user.header}>USER INFORMATION</h3>
                {/*User information Section*/}
                <div className={user.formGroup}>
                  <label className={user.label} htmlFor="name">
                    First Name
                  </label>
                  <input
                    className={user.input}
                    type="text"
                    name="fname"
                    placeholder="John"
                    value={this.state.firstName}
                    onChange={event => {
                      this.setState({ firstName: event.target.value })
                    }}
                  />
                </div>

                <div className={user.formGroup}>
                  <label className={user.label} htmlFor="name">
                    Last Name
                  </label>
                  <input
                    className={user.input}
                    type="text"
                    name="lname"
                    placeholder="Doe"
                    value={this.state.lastName}
                    onChange={event => {
                      this.setState({ lastName: event.target.value })
                    }}
                  />
                </div>

                <div className={user.formGroup}>
                  <label className={user.label} htmlFor="tel">
                    Phone Number
                  </label>
                  <input
                    className={user.input}
                    type="number"
                    name="tel"
                    min="1000000000"
                    max="9999999999"
                    placeholder="6041234567"
                    value={this.state.phoneNum}
                    onChange={event => {
                      this.setState({ phoneNum: event.target.value })
                    }}
                  />
                </div>

                <div className={user.formGroup}>
                  <label className={user.label} htmlFor="date">
                    Date of Birth
                  </label>
                  <input
                    className={user.input}
                    type="date"
                    name="dobP"
                    placeholder="YYYY/MM/DD"
                    value={this.state.DOBUser}
                    onChange={event => {
                      this.setState({ DOBUser: event.target.value })
                    }}
                  />
                </div>

                <div className={user.formGroup}>
                  <label className={user.label} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className={user.input}
                    type="email"
                    name="email"
                    placeholder="John_Doe@gmail.com"
                    value={this.state.email}
                    onChange={event => {
                      this.setState({ email: event.target.value })
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*Sociograpic Section*/}
          <div className={socio.radioContainer}>
            <h3 className={socio.text}>Sociographic</h3>
            <h5 className={socio.text}>
              Check information that applies to your situation
            </h5>
            <div className={socio.radioWrapper}>
              <div className={socio.radioGroup}>
                <input
                  checked={!!this.state.socioGraphic['newComer']}
                  onChange={({ target }) => {
                    this.setState(({ socioGraphic }) => ({
                      socioGraphic: {
                        ...socioGraphic,
                        newComer: target.checked,
                      },
                    }))
                  }}
                  type="checkbox"
                  id="new"
                  name="socio"
                  value="new"
                />
                <label className={socio.radioInput} htmlFor="new">
                  Newcomer to Canada
                </label>
              </div>
              <div className={socio.radioGroup}>
                <input
                  checked={!!this.state.socioGraphic['homeless']}
                  onChange={({ target }) => {
                    this.setState(({ socioGraphic }) => ({
                      socioGraphic: {
                        ...socioGraphic,
                        homeless: target.checked,
                      },
                    }))
                  }}
                  type="checkbox"
                  id="homeless"
                  name="socio"
                  value="homeless"
                />
                <label className={socio.radioInput} htmlFor="homeless">
                  Homeless
                </label>
              </div>
              <div className={socio.radioGroup}>
                <input
                  checked={!!this.state.socioGraphic['unemployed']}
                  onChange={({ target }) => {
                    this.setState(({ socioGraphic }) => ({
                      socioGraphic: {
                        ...socioGraphic,
                        unemployed: target.checked,
                      },
                    }))
                  }}
                  type="checkbox"
                  id="unemployed"
                  name="socio"
                  value="unemployed"
                />
                <label className={socio.radioInput} htmlFor="unemployed">
                  Unemployed
                </label>
              </div>
              <div className={socio.radioGroup}>
                <input type="checkbox" id="SN" name="socio" value="SN" />
                <label className={socio.radioInput} htmlFor="SN">
                  Child special need
                </label>
              </div>

              <div className={socio.radioGroup}>
                <input
                  checked={this.state.otherChecked}
                  onChange={({ target }) => {
                    this.setState(({ socioGraphic }) => ({
                      socioGraphic: {
                        ...socioGraphic,
                        other: target.checked,
                      },
                    }))
                  }}
                  type="checkbox"
                  id="other"
                  name="socio"
                  value="other"
                  onClick={this.handleOnClick.bind(this)}
                />
                <label className={socio.radioInput} htmlFor="other">
                  Other
                </label>
                <Select selector={this.state.otherChecked}>
                  <input
                    value={this.state.socioGraphic['other']}
                    onChange={({ target }) => {
                      this.setState(({ socioGraphic }) => ({
                        socioGraphic: {
                          ...socioGraphic,
                          other: target.value,
                        },
                      }))
                    }}
                    className={socio.textInput}
                    type="text"
                    id="otherValue"
                    name="other"
                  />
                </Select>
              </div>
            </div>
          </div>

          {/*Baby Information Section*/}
          <div>
            <h3 className={baby.header}>BABY INFORMATION</h3>
            <div className={baby.formGroup}>
              <label className={baby.label} htmlFor="bdob">
                Baby's date of birth
              </label>
              <input
                className={baby.input}
                type="date"
                name="bdob"
                value={this.state.DOBBaby}
                onChange={({ target }) =>
                  this.setState({ DOBBaby: target.value })
                }
                placeholder="yyyy/mm/dd"
              />
            </div>
          </div>

          <div className={endbutton.wrapper}>
            {/* <button className={endbutton.buttonInverse} type="submit">
            Previous
          </button> */}
            <button type="submit" className={endbutton.button}>
              Next
            </button>
          </div>
        </form>
      )
    }
  }
)

const styles = {
  container: css({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'Center',
  }),
  userContainer: css({
    display: 'flex',
    flexDirection: 'row',
    marginTop: '2em',
  }),
  color: css({
    color: colors.PRIMARY,
  }),
}

const userProfile = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontFamily: "'Lato', sans-serif",
    color: colors.LIGHTGRAY,
    flex: 1,
    marginTop: '1.15em',
  }),

  button: css({
    width: '150px',
    height: '35px',
    borderRadius: '5px',
    fontSize: '16px',
    color: colors.PRIMARY,
    borderColor: colors.PRIMARY,
  }),
}

const user = {
  container: css({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: '3',
    marginLeft: '4em',
  }),
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  }),
  input: css({
    flex: '1',
    height: '25px',
  }),
  label: css({
    fontSize: '16px',
    width: '25%',
    textAlign: 'right',
    marginRight: '1em',
    justifyContent: 'center',
  }),
  formGroup: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'left',
    margin: '0.65em',
    width: '500px',
    fontFamily: "'Lato', sans-serif",
    color: colors.LIGHTGRAY,
  }),
  header: css({
    paddingBottom: '0.5em',
    borderBottom: `1px solid ${colors.PRIMARY}`,
    marginBottom: '1em',
    fontSize: '24px',
    color: colors.PRIMARY,
  }),
}

const socio = {
  radioGroup: css({
    width: '30%',
    margin: '0.5em 0 0.5em 0',
    alignItems: 'left',
  }),
  radioWrapper: css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    color: colors.LIGHTGRAY,
    marginTop: '2em',
  }),
  radioContainer: css({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5em',
  }),
  radioInput: css({
    marginLeft: '1em',
  }),
  text: css({
    fontFamily: "'Lato', sans-serif",
    color: colors.PRIMARY,
  }),
  textInput: css({
    marginLeft: '0.9em',
  }),
}

const baby = {
  formGroup: css({
    display: 'flex',
    flexDirection: 'row',
    margin: '0.25em',
    fontSize: '16px',
    fontFamily: "'Lato', sans-serif",
    color: colors.LIGHTGRAY,
  }),
  header: css({
    marginTop: '2em',
    paddingBottom: '0.5em',
    borderBottom: `1px solid ${colors.PRIMARY}`,
    marginBottom: '1em',
    color: colors.PRIMARY,
  }),
  input: css({
    height: '25px',
    width: '350px',
    justifyContent: 'left',
  }),
  label: css({
    fontSize: '18px',
    marginRight: '1em',
    justifyContent: 'left',
  }),
}

const endbutton = {
  wrapper: css({
    margin: '2em',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }),
  button: css({
    width: '130px',
    height: '50px',
    borderRadius: '5px',
    fontSize: '16px',
    color: 'white',
    margin: '1em',
    backgroundColor: colors.PRIMARY,
    border: 'none',
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
