import React from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from 'common'

export default class Button extends React.Component {
  render() {
    const { style, className, secondary, ...props } = this.props
    return (
      <View
        style={style}
        className={css(
          styles.button,
          secondary === true && styles.secondary,
          className
        )}
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
    borderRadius: 5,
    backgroundColor: colors.PRIMARY,
  }),
  secondary: css({
    backgroundColor: 'transparent',
    borderRadius: 5,
    border: '2px solid ' + colors.PRIMARY,
    color: colors.PRIMARY,
    width: 146,
    height: 46,
  }),
}
