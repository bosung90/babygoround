import React from 'react'
import { css } from 'react-emotion'
import { colors } from 'common'
import { View, Button, Input, Progress } from 'components'
import { dispatch } from 'store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Item from './Item'
import DayColumn from './DayColumn'
import moment from 'moment'
import { withRouter } from 'react-router-dom'

export default withRouter(
  class Calendar extends React.Component {
    // Get first day of the month
    state = { month: moment().date(1) }
    render() {
      const firstDayOfCurrentMonth = this.state.month.days()

      const daysInCurrentMonth = this.state.month.daysInMonth()

      const days = []
      {
        const currentDayIterator = moment(this.state.month).subtract(
          firstDayOfCurrentMonth,
          'days'
        )
        for (let i = 0; i < firstDayOfCurrentMonth + daysInCurrentMonth; i++) {
          days.push(currentDayIterator.date())
          currentDayIterator.add(1, 'days')
        }
      }

      return (
        <View column h={1024 - 75} alignCenter>
          <View w={750}>
            <Progress pagenum={2} />
            <View column style={{ marginTop: 20 }}>
              <View style={{ color: colors.PRIMARY }}>SET AN APPOINTMENT</View>
              <View style={{ color: colors.PRIMARY }}>
                Select a date to set an appointment to pick up your items.
              </View>
            </View>
            <View h={600} column style={{ border: '1px solid lightGrey' }}>
              <View
                alignCenter
                ph={10}
                style={{ color: 'white' }}
                h={50}
                bg={colors.PRIMARY}
                row
                justifyBetween
              >
                <FontAwesomeIcon
                  onClick={() =>
                    this.setState(({ month }) => ({
                      month: month.subtract(1, 'months'),
                    }))
                  }
                  icon={faCaretLeft}
                  color="white"
                  size="3x"
                />
                {this.state.month.format('MMMM YYYY').toUpperCase()}
                <FontAwesomeIcon
                  onClick={() =>
                    this.setState(({ month }) => ({
                      month: month.add(1, 'months'),
                    }))
                  }
                  icon={faCaretRight}
                  color="white"
                  size="3x"
                />
              </View>
              <View row pr={4}>
                <DayColumn day="SUN" />
                <DayColumn day="MON" />
                <DayColumn day="TUE" />
                <DayColumn day="WED" />
                <DayColumn day="THU" />
                <DayColumn day="FRI" />
                <DayColumn day="SAT" />
              </View>
              <View row style={{ flexWrap: 'wrap' }}>
                {days.map((day, index) => {
                  return <Item key={index} dateNumber={parseInt(day, 10)} />
                })}
              </View>

              <View fill bg={'#ddd'} center>
                <Button onClick={() => this.props.history.push('/success')}>
                  Next
                </Button>
              </View>
            </View>
          </View>
        </View>
      )
    }
  }
)
