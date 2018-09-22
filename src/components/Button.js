import React from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from 'common'

export default class Button extends React.Component {
  render() {
    const { style, className, ...props } = this.props
    return (
      <View
        style={style}
        className={css(styles.button, className)}
        center
        {...props}
      >
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  button: css({
    color: 'white',
    display: 'flex',
    width: 150,
    height: 50,
    cursor: 'pointer',
    backgroundColor: colors.PRIMARY,
  }),
}
