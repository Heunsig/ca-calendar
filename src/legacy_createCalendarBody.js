import { getFristDayOfTheWeek, match_date, generate_date, generate_date_form } from './helpers/date'


export default function createCalendarBody () {
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