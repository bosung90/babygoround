import React from 'react'
import { css } from 'react-emotion'
import { View, Label } from 'components'

class Input extends React.Component {
  render() {
    const { label, forwardedRef, style, ...props } = this.props
    return (
      <View alignCenter style={style} row justifyBetween {...props}>
        <Label label={label} />
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
  input: css({
    height: 35,
    width: 350,
    fontSize: 16,
  }),
}
