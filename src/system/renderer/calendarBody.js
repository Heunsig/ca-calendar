import { getFristDayOfTheWeek } from '../helpers/calendar'
import { matchDate, generateDate, generateDateForm, convertToBasicDateFormat } from '../helpers/date'
import { isMatched } from '../helpers/string'

export default function () {
  const TOTALDATEBOXS = 42

  let month = this.month
  let day = this.day
  let year = this.year
  

  let assignedMonth = this.assignedMonth
  let assignedDay = this.assignedDay
  let assignedYear = this.assignedYear

  let daysPerMonth = this.daysPerMonth

  let schedules = this.schedules

  let boxCounter = 0
  let dateCounter = 1
  let firstDayOfTheWeek = getFristDayOfTheWeek(month, year)
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

    if (dateCounter <= daysPerMonth[month]) {
      if (
        matchDate(
          generateDate(generateDateForm(year, month, dateCounter)), 
          generateDate(generateDateForm(assignedYear, assignedMonth, assignedDay))
        )
      )
      {
        calendarContent += `
          <td class="cac-date-today cac-date">
            <div class="cac-date-box">
              <div class="cac-date-text">${dateCounter}</div>
              <div class="cac-date-content">`
                for (let schedule of schedules) {
                  if (
                    matchDate(
                      generateDate(generateDateForm(year, month, day)), 
                      generateDate(convertToBasicDateFormat(schedule.date, schedule.format))
                    )
                  ) {
                    dateBox = ``
                    if (schedule.items) {
                      dateBox += `<ul class="cac-list">`
                      schedule.items.forEach(item => {
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
              for (let schedule of schedules) {
                if (
                  matchDate(
                    generateDate(generateDateForm(year, month, dateCounter)), 
                    generateDate(convertToBasicDateFormat(schedule.date, schedule.format))
                  )
                ) {
                  dateBox = ``
                  if (schedule.items) {
                    dateBox += `<ul class="cac-list">`
                    schedule.items.forEach(item => {
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