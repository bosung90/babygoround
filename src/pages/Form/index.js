import React from 'react'
import { css } from 'react-emotion'

export default class Form extends React.Component {
  render() {
    return <div className={styles.container} />
  }
}

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  // loginButton: css({
  //   backgroundColor: colors.PRIMARY,
  //   width: 150,
  //   height: 50,
  // }),
}
