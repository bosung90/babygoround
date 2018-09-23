import React from 'react'
import { css } from 'react-emotion'
import RegistrationFormOne from '../../components/RegistrationFormOne'
import RegistrationFormTwo from '../../components/RegistrationFormTwo'
import Progress from '../../components/Progress'

export default class Form extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Progress />
        <RegistrationFormOne />
      </div>
    )
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 17%',
  }),
  // loginButton: css({
  //   backgroundColor: colors.PRIMARY,
  //   width: 150,
  //   height: 50,
  // }),
}
