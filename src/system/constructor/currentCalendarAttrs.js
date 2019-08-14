import { setDayPerMonth } from '../../helpers/date'

let year = 0
let month = 0
let date = 0

let daysPerMonth = []

let contents = []

export default {
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
  'daysPerMonth': {
    get: function () {
      return daysPerMonth.concat()
    }
  },
  'contents': {
    get: function () {
      return contents
    },
    set: function (val) {
      contents = val
    }
  }
}