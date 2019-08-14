let options = {
  target: null,
  date: '',
  is_simplified: false
}

export default {
  'options': {
    get: function () {
      return { ...options }
    },
    set: function (opts) {
      options = { ...options, ...opts }
    }
  }
}