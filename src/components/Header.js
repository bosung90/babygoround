import React from 'react'
import { css } from 'react-emotion'

export default class Header extends React.Component {
  render() {
    return <div className={styles.header}>Header</div>
  }
}

const styles = {
  header: css({}),
}
