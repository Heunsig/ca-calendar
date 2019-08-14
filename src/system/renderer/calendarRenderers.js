import { 
  getFristDayOfTheWeek, 
  match_date, 
  generate_date, 
  generate_date_form 
} from '../../helpers/date'

import eventSetter from '../events/eventSetter'

export function createCalendarLayout (options) {
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

export function createCalendarBody () {
  const TOTALDATEBOXS = 42

  let boxCounter = 0
  let dateCounter = 1
  let firstDayOfTheWeek = getFristDayOfTheWeek(this.month, this.year)
  let firstDayOfTheWeek2 = firstDayOfTheWeek
  let calendarContent = ``

  calendarContent += `
      <tr>
  ` 
  while (firstDayOfTheWeek > 0){
      calendarContent += `
        <td class="cac-date cac-date-empty">
          <div class="cac-date-box">
            <div class="cac-date-text"></div>
            <div class="cac-date-content"></div>
          </div>
        </td>
      `
      firstDayOfTheWeek--
      boxCounter++
  }

  while (dateCounter <= (TOTALDATEBOXS - boxCounter)){
    let dateBox = ``

    if (firstDayOfTheWeek2 > 6) {
      firstDayOfTheWeek2 = 0
      calendarContent += `</tr><tr>`
    }

    if (dateCounter <= this.daysPerMonth[this.month]) {
      if (match_date(generate_date(generate_date_form(this.year, this.month, dateCounter)), generate_date(generate_date_form(this.defaultYear, this.defaultMonth, this.defaultDate))))
      {
        calendarContent += `
          <td class="cac-date-today cac-date">
            <div class="cac-date-box">
              <div class="cac-date-text">${dateCounter}</div>
              <div class="cac-date-content">`
                if (this.defaultContents) {
                  dateBox += `<ul class="cac-list">`
                  this.defaultContents.forEach(item => {
                    dateBox += `
                      <li class="cac-list-item">
                        <div class="cac-list-item-label">${item.label}</div>
                        <div class="cac-list-item-value">${item.value}</div>
                      </li>
                    `
                  })
                  dateBox += `</ul>`
                }

                for (let index in this.contents) {
                  if (match_date(generate_date(generate_date_form(this.year, this.month, this.date)), generate_date(this.contents[index].date))) {
                    dateBox = ``
                    if (this.contents[index].items) {
                      dateBox += `<ul class="cac-list">`
                      this.contents[index].items.forEach(item => {
                        dateBox += `
                          <li class="cac-list-item">
                            <div class="cac-list-item-label">${item.label}</div>
                            <div class="cac-list-item-value">${item.value}</div>
                          </li>
                        `
                      })
                      dateBox += `</ul>`
                    }

                    break
                  }
                }


        calendarContent += dateBox
        calendarContent += `</div>
            </div>
          </td>`

      } else {
        calendarContent +=`
        <td class="cac-date">
          <div class="cac-date-box">
            <div class="cac-date-text">${dateCounter}</div>
            <div class="cac-date-content">`
              if (this.defaultContents) {
                dateBox += `<ul class="cac-list">`
                this.defaultContents.forEach(item => {
                  dateBox += `
                    <li class="cac-list-item">
                      <div class="cac-list-item-label">${item.label}</div>
                      <div class="cac-list-item-value">${item.value}</div>
                    </li>
                  `
                })
                dateBox += `</ul>`
              }

              for (let index in this.contents) {
                if (match_date(generate_date(generate_date_form(this.year, this.month, dateCounter)), generate_date(this.contents[index].date))) {
                  dateBox = ``
                  if (this.contents[index].items) {
                    dateBox += `<ul class="cac-list">`
                    this.contents[index].items.forEach(item => {
                      dateBox += `
                        <li class="cac-list-item">
                          <div class="cac-list-item-label">${item.label}</div>
                          <div class="cac-list-item-value">${item.value}</div>
                        </li>
                      `
                    })
                    dateBox += `</ul>`
                  }

                  break
                }
              }

        calendarContent += dateBox
        calendarContent += `</div>
          </div>
        </td>`
      }
    } else {
        calendarContent += `
          <td class="cac-date cac-date-empty">
            <div class="cac-date-box">
              <div class="cac-date-text"></div>
              <div class="cac-date-content"></div>
            </div>
          </td>`
    }
    
    firstDayOfTheWeek2++
    dateCounter++
  }

  calendarContent += `
      </tr>
  `

  return calendarContent
}

export function render () {
  this.elements.monthYear.innerHTML = `
    <div>${this.year}</div>
    <div>${MONTHNAMES[this.month]}</div>
  `
  this.elements.calendarBody.innerHTML = createCalendarBody.call(this)
  eventSetter.call(this)
}