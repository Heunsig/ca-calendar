function getSetDate (date) {
  return date ? new Date(date) : new Date()
}

export default function (options) {
  let month
  let date
  let year

  const setDate = getSetDate(options.date)
  month = setDate.getMonth()
  date = setDate.getDate()
  year = setDate.getFullYear()

  return {
    month,
    date,
    year
  }
}



