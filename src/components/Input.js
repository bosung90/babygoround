import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'

export default class Input extends React.Component {
  render() {
    const label = this.props.label
    return <input className={styles.input} />
  }
}

const styles = {
  input: css({
    height: 35,
    width: 150,
  }),
}
