import setCalendarAttrs from './setCalendarAttrs'
import currentCalendarAttrs from './currentCalendarAttrs'
import elements from './elements'
import options from './options'
import events from './events'

import setCalendarDateValue from './initFunctions/setCalendarDateValues'
import { createCalendarLayout } from '../renderer/calendarRenderers'

export default function (target, opts) {
  Object.defineProperties(this, {
    ...setCalendarAttrs,
    ...currentCalendarAttrs,
    ...elements,
    ...options,
    ...events
  })

  this.options = { ...{ target: target }, ...opts }

  const initDateValues = setCalendarDateValue(this.options)
  this.year = initDateValues.year
  this.month = initDateValues.month
  this.date = initDateValues.date
  this.setYear = initDateValues.year
  this.setMonth = initDateValues.month
  this.setDate = initDateValues.date

  this.elements = createCalendarLayout(this.options)

  // Attach events
  this.elements.btnPrevMonth.addEventListener('click', () => {
    this.previousMonth()
  })

  this.elements.btnNextMonth.addEventListener('click', () => {
    this.nextMonth()
  })
}