function init (elements) {
  let objDate = setDefaultDate(options)
  this.year = objDate.year
  this.month = objDate.month
  this.date = objDate.date
  this.defaultYear = objDate.year
  this.defaultMonth = objDate.month
  this.defaultDate = objDate.date

  let objEle = createCalendarLayout.call(this)
  elements.calendar = objEle.calendar
  elements.calendarTitle = objEle.calendarTitle
  elements.calendarBody = objEle.calendarBody
  elements.monthYear = objEle.monthYear
  elements.btnPrevMonth = objEle.btnPrevMonth
  elements.btnNextMonth = objEle.btnNextMonth

  setDefaultEvents.call(this)
}