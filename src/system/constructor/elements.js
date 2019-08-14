let elements = {
  calendar: null,
  calendarTitle: null,
  calendarBody: null,
  monthYear: null,
  btnPrevMonth: null,
  btnNextMonth: null
}

export default {
  'elements': {
    get: function () {
      return { ...elements }
    },
    set: function (newElements) {
      elements = {...elements, ...newElements}
    }
  }
}