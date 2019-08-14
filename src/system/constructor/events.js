let events = {
  click: null
}

export default {
  'events': {
    get: function () {
      return events
    }
  }
}