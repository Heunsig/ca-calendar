export default function () {
  const options = this.options

  let calendar
  let calendarBody
  let thead
  let calendarTitle
  let trDayNames
  let monthYear
  let trCalendarTitle
  let btnPrevMonth
  let btnNextMonth

  calendar = document.createElement('table')
  calendar.className = 'cac-calendar'

  thead = document.createElement('thead')
  calendarBody = document.createElement('tbody')

  trCalendarTitle = document.createElement('tr')
  calendarTitle = document.createElement('th')
  calendarTitle.setAttribute('colspan', '7')
  calendarTitle.className = 'cac-calendar-title'

  trDayNames = document.createElement('tr')
  trDayNames.className = 'cac-day-names'

  let daynames = []
  if (options.is_simplified) {
    daynames = DAYNAMES_SIMPLFIED
  } else {
    daynames = DAYNAMES
  }

  for (let dayName of daynames) {
    let thDayName = document.createElement('th')
    thDayName.innerHTML = dayName
    trDayNames.appendChild(thDayName)
  }
  

  monthYear = document.createElement('div')
  monthYear.className = 'cac-monthYear'

  btnPrevMonth = document.createElement('div')
  btnPrevMonth.appendChild(document.createTextNode('<'))
  btnPrevMonth.className = 'cac-btn-prevMonth'

  btnNextMonth = document.createElement('div')
  btnNextMonth.appendChild(document.createTextNode('>'))
  btnNextMonth.className = 'cac-btn-nextMonth'

  calendarTitle.appendChild(btnPrevMonth)
  calendarTitle.appendChild(monthYear)
  calendarTitle.appendChild(btnNextMonth)

  trCalendarTitle.appendChild(calendarTitle)
  thead.appendChild(trCalendarTitle)
  thead.appendChild(trDayNames)
  calendar.appendChild(thead)
  calendar.appendChild(calendarBody)

  return {
    calendar,
    calendarTitle,
    calendarBody,
    monthYear,
    btnPrevMonth,
    btnNextMonth
  }
}