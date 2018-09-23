import React from 'react'
import { css } from 'react-emotion'
import { View, Circle } from 'components'
import { colors } from 'common'

export default class Progress extends React.Component {
  render() {
    const { style, pagenum, className, ...props } = this.props
    return (
      <View col style={{ marginTop: 16 }}>
        <View style={styles.progressText}>Registration Progress</View>
        <View row style={{ marginTop: 15 }}>
          <Circle done={pagenum >= 1} style={{ marginRight: 25 }}>
            1
          </Circle>
          <Circle done={pagenum >= 2} style={{ marginRight: 25 }}>
            2
          </Circle>
          <Circle done={pagenum >= 3} style={{ marginRight: 25 }}>
            3
          </Circle>
        </View>
      </View>
    )
  }
}
const styles = {
  progressText: css({
    display: 'flex',
    color: colors.PRIMARY,
    fontSize: 18,
  }),
}
