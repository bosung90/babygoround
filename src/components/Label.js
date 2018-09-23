import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View } from 'components'

export default class Label extends React.Component {
  render() {
    const { label, style, ...props } = this.props
    return <View style={styles.label}>{label}</View>
  }
}

const styles = {
  label: css({
    fontSize: 18,
    color: colors.LABEL,
    textAlign: 'end',
  }),
}
