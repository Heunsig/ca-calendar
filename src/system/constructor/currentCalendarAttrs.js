import { getTotalDaysPerMonth } from '../helpers/calendar'
import { isMatched } from '../helpers/string'

let year = 0
let month = 0
let day = 0

let daysPerMonth = []

let schedules = []

export default {
  'year': {
    get: function () {
      return year
    },
    set: function (val) {
      daysPerMonth = getTotalDaysPerMonth(val)
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
  'day': {
    get: function () {
      return day
    },
    set: function (val) {
      day = val
    },
  },
  'daysPerMonth': {
    get: function () {
      return daysPerMonth.concat()
    }
  },
  'schedules': {
    get: function () {
      return schedules
    },
    set: function (val) {
      for (let a of val) {
        if (!a.format) {
          a.format = 'mm/dd/yyyy'
        }

        if (!isMatched(a.date, a.format)) {
          throw new Error('Whoop! the date and format are not matched.')
        }
      }

      schedules = [...schedules, ...val ]
    }
  }
}