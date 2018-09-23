import React from 'react'
import { css } from 'react-emotion'
import { View } from 'components'
import { colors } from 'common'

export default class Circle extends React.Component {
  render() {
    const { style, className, done, ...props } = this.props
    return (
      <View
        className={css(
          styles.todo,
          done === true && styles.done,
          className,
          style
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
  done: css({
    color: 'white',
    backgroundColor: colors.PRIMARY,
    display: 'flex',
    width: 50,
    height: 50,
    borderRadius: 25,
    fontSize: 24,
  }),
  todo: css({
    color: colors.PRIMARY,
    backgroundColor: 'transparent',
    display: 'flex',
    border: '2px solid ' + colors.PRIMARY,
    width: 48,
    height: 48,
    borderRadius: 24,
    fontSize: 24,
  }),
}
