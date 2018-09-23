import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View } from 'components'

class Input extends React.Component {
  render() {
    const { label, forwardedRef, style, ...props } = this.props
    return (
      <View alignCenter style={style} row justifyBetween {...props}>
        <View style={styles.label}>{label}</View>
        <View>
          <input ref={forwardedRef} className={styles.input} />
        </View>
      </View>
    )
  }
}

export default React.forwardRef((props, ref) => {
  return <Input forwardedRef={ref} {...props} />
})

const styles = {
  label: css({
    fontSize: 18,
    color: colors.LABEL,
  }),
  input: css({
    height: 35,
    width: 350,
    fontSize: 16,
  }),
}
