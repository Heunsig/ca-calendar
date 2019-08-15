import assignedCalendarAttrs from './assignedCalendarAttrs'
import currentCalendarAttrs from './currentCalendarAttrs'
import elements from './elements'
import options from './options'
import events from './events'

import { getMDY } from '../helpers/date'

import createCalendarLayout from '../renderer/calendarLayout'

export default function (target, opts) {
  Object.defineProperties(this, {
    ...assignedCalendarAttrs,
    ...currentCalendarAttrs,
    ...elements,
    ...options,
    ...events
  })  

  this.options = { ...{ target: target }, ...opts }

  const initDateValues = getMDY(this.options.date)
  this.year = initDateValues.year
  this.month = initDateValues.month
  this.day = initDateValues.day
  this.assignedYear = initDateValues.year
  this.assignedMonth = initDateValues.month
  this.assignedDay = initDateValues.day

  this.elements = createCalendarLayout.call(this)

  // Attach events
  this.elements.btnPrevMonth.addEventListener('click', () => {
    this.moveToPreviousMonth()
  })

  this.elements.btnNextMonth.addEventListener('click', () => {
    this.moveToNextMonth()
  })
}