let setYear = 0
let setMonth = 0
let setDate = 0

let setContents = null

export default {
  'setYear': {
    get: function () {
      return setYear
    },
    set: function (val) {
      setYear = val
    }
  },
  'setMonth': {
    get: function () {
      return setMonth
    },
    set: function (val) {
      setMonth = val
    }
  },
  'setDate': {
    get: function () {
      return setDate
    },
    set: function (val) {
      setDate = val
    }
  },
  'setContents': {
    get: function () {
      return setContents
    },
    set: function (val) {
      setContents = val
    }
  }
}