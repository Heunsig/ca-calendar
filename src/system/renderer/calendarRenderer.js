import createCalendarBody from './calendarBody'
import eventSetter from '../events/eventSetter'

export default function () {
  const elements = this.elements
  const month = this.month
  const year = this.year

  elements.monthYear.innerHTML = `
    <div>${year}</div>
    <div>${MONTHNAMES[month]}</div>
  `
  elements.calendarBody.innerHTML = createCalendarBody.call(this)
  eventSetter.call(this)
}