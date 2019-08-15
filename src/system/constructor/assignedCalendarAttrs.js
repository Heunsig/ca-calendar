let assignedYear = 0
let assignedMonth = 0
let assignedDay = 0

// let assignedContents = null

export default {
  'assignedYear': {
    get: function () {
      return assignedYear
    },
    set: function (val) {
      assignedYear = val
    }
  },
  'assignedMonth': {
    get: function () {
      return assignedMonth
    },
    set: function (val) {
      assignedMonth = val
    }
  },
  'assignedDay': {
    get: function () {
      return assignedDay
    },  
    set: function (val) {
      assignedDay = val
    }
  },
  // 'assignedContents': {
  //   get: function () {
  //     return assignedContents
  //   },
  //   set: function (val) {
  //     assignedContents = val
  //   }
  // }
}