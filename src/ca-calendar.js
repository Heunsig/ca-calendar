  const MONTHNAMES = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',  'December']
  const DAYNAMES = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday',  'Saturday' ]

  var CaCalendar = function () {

    let options = {
      id: 'calendar',
      date: ''
    }

    let year = 0
    let month = 0
    let date = 0

    let DefaultDate = null
    let daysPerMonth = []

    let contents = []

    let elements = {
      calendar: null,
      calendarTitle: null,
      calendarBody: null,
      monthYear: null,
      btnPrevMonth: null,
      btnNextMonth: null
    }

    let events = {
      click: null
    }

    if (arguments[0] && typeof arguments[0] === 'object') {
      extendDefaultSettings(options, arguments[0])
    }

    Object.defineProperties(this, {
      'options': {
        get: function () {
          return Object.assign({}, options)
        }
      },
      'year': {
        get: function () {
          return year
        },
        set: function (val) {
          daysPerMonth = setDayPerMonth(val)
          year = val
        }
      },
      'month': {
        get: function () {
          return month
        },
        set: function (val) {
          month = val
        }
      },
      'date': {
        get: function () {
          return date
        },
        set: function (val) {
          date = val
        },
      },
      'contents': {
        get: function () {
          return contents
        },
        set: function (val) {
          contents = val
        }
      },
      'elements': {
        get: function () {
          return Object.assign({}, elements)
        }
      },
      'daysPerMonth': {
        get: function () {
          return daysPerMonth.concat()
        }
      },
      'events': {
        get: function () {
          return events
        }
      }
    })

    init.call(this, elements)
  }

  function init (elements) {
    let objDate = setDefaultDate(this.options)
    this.month = objDate.month
    this.date = objDate.date
    this.year = objDate.year
    
    let objEle = createCalendarLayout()
    elements.calendar = objEle.calendar
    elements.calendarTitle = objEle.calendarTitle
    elements.calendarBody = objEle.calendarBody
    elements.monthYear = objEle.monthYear
    elements.btnPrevMonth = objEle.btnPrevMonth
    elements.btnNextMonth = objEle.btnNextMonth

    setDefaultEvents.call(this)
  }


  function setDefaultDate (options) {
    let DefaultDate,
        month,
        date,
        year,
        daysPerMonth

    DefaultDate = getDefaultDate(options.date)
    month = DefaultDate.getMonth()
    date = DefaultDate.getDate()
    year = DefaultDate.getFullYear()

    return {
      month: month,
      date: date,
      year: year
    }
  }

  function setDefaultEvents () {
    this.elements.btnPrevMonth.addEventListener('click', () => {
      this.previousMonth()
    })

    this.elements.btnNextMonth.addEventListener('click', () => {
      this.nextMonth()
    })
  }

  function extendDefaultSettings(source, properties) {
    for (property in properties) {
      if (source.hasOwnProperty(property)) {
        source[property] = properties[property]
      }
    }
  }

  function getFebNumberOfDays (year) {
    if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
      return 29
    } else {
      return 28
    }
  }

  function setDayPerMonth (year) {
    return [ 31, getFebNumberOfDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
  }

  function getDefaultDate (defaultDate) {
    return defaultDate ? new Date(defaultDate) : new Date()
  } 

  function getFristDayOfTheWeek (month, year) {
    let firstDate = new Date(MONTHNAMES[month] + ' 1, ' + year)
    let firstDayOfTheWeek = firstDate.getDay()
    return firstDayOfTheWeek
  }

  function createCalendarLayout () {
    let calendar,
        calendarBody,
        thead,
        calendarTitle,
        trDayNames,
        monthYear,
        trCalendarTitle,
        btnPrevMonth,
        btnNextMonth

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

    for (let dayName of DAYNAMES) {
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
      calendar: calendar,
      calendarTitle: calendarTitle,
      calendarBody: calendarBody,
      monthYear: monthYear,
      btnPrevMonth: btnPrevMonth,
      btnNextMonth: btnNextMonth
    }
  }

  function createCalendarBody (month, date, year, daysPerMonth, contents) {
    const TOTALDATEBOXS = 42

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
      if (firstDayOfTheWeek2 > 6) {
        firstDayOfTheWeek2 = 0
        calendarContent += `</tr><tr>`
      }

      if (dateCounter <= daysPerMonth[month]) { 
        if (dateCounter === date) {
          calendarContent += `
            <td class="cac-date-today cac-date">
              <div class="cac-date-box">
                <div class="cac-date-text">${dateCounter}</div>
                <div class="cac-date-content">`

          for (let index in contents) {
            if (new Date(year, month, date).getTime() == new Date(contents[index].date).getTime()) {
              if (contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                contents[index].items.forEach(item => {
                  calendarContent += `
                    <li class="cac-list-item">
                      <div class="cac-list-item-label">${item.label}</div>
                      <div class="cac-list-item-value">${item.value}</div>
                    </li>
                  `
                })
                calendarContent += `</ul>`
              }

              break
            }
          }
          
          calendarContent += `</div>
              </div>
            </td>`
        } else {
          calendarContent +=`
          <td class="cac-date">
            <div class="cac-date-box">
              <div class="cac-date-text">${dateCounter}</div>
              <div class="cac-date-content">`

          for (let index in contents) {
            if (new Date(year, month, dateCounter).getTime() == new Date(contents[index].date).getTime()) {
              if (contents[index].items) {
                calendarContent += `<ul class="cac-list">`
                contents[index].items.forEach(item => {
                  calendarContent += `
                    <li class="cac-list-item">
                      <div class="cac-list-item-label">${item.label}</div>
                      <div class="cac-list-item-value">${item.value}</div>
                    </li>
                  `
                })
                calendarContent += `</ul>`
              }

              break
            }
          }

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

  function eventSetter () {
    if (this.events.click) {
      eventClick.call(this, this.events.click)
    }
  }

  function eventClick (handler) {
    let dateBoxs = document.querySelectorAll('.cac-date')

    for (let box of dateBoxs) {
      let fullDate = null
      let date = box.querySelector('.cac-date-text').innerHTML

      if (date) {
        fullDate = `${this.month + 1}/${date}/${this.year}`
      }

      box.addEventListener('click', function (e) {
        handler(e, fullDate)
      })  
    }
  }

  function render () {
    this.elements.monthYear.innerHTML = `
      <div>${this.year}</div>
      <div>${MONTHNAMES[this.month]}</div>
    `
    this.elements.calendarBody.innerHTML = createCalendarBody(this.month, this.date, this.year, this.daysPerMonth, this.contents)
    eventSetter.call(this)
  }

  CaCalendar.prototype.print = function () {
    render.call(this)
    document.getElementById(this.options.id).appendChild(this.elements.calendar)
  }

  CaCalendar.prototype.today = function () {  
    let today = new Date()
    this.month = today.getMonth()
    this.date = today.getDate()
    this.year = today.getFullYear()
    render.call(this)
  }

  CaCalendar.prototype.defaultDate = function () {
    let DateValue = getDefaultDate(this.options.date)
    this.month = DateValue.getMonth()
    this.date = DateValue.getDate()
    this.year = DateValue.getFullYear()
    render.call(this)
  }

  CaCalendar.prototype.nextYear = function () {
    this.year = this.year + 1
    render.call(this)
  }

  CaCalendar.prototype.previousYear = function () {
    this.year = this.year - 1
    render.call(this)
  }

  CaCalendar.prototype.nextMonth = function () {
    this.month = this.month + 1
    if (this.month > 11) {
      this.year = this.year + 1
      this.month = 0
    }
    render.call(this)
  }

  CaCalendar.prototype.previousMonth = function () {
    this.month = this.month - 1
    if (this.month < 0) {
      this.year = this.year - 1
      this.month = 11
    }
    render.call(this)
  }

  CaCalendar.prototype.setContents = function (valContents) {
    this.contents = valContents
    render.call(this)
  }

  CaCalendar.prototype.click = function (handler) {
    this.events.click = handler
    render.call(this)
  }

  export default CaCalendar