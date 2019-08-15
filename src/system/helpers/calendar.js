export function getFristDayOfTheWeek (month, year) {
  let firstDate = new Date(MONTHNAMES[month] + ' 1, ' + year)
  let firstDayOfTheWeek = firstDate.getDay()
  return firstDayOfTheWeek
}

export function getTotalDaysOfFeb (year) {
  if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
    return 29
  } else {
    return 28
  }
}

export function getTotalDaysPerMonth (year) {
  return [ 31, getTotalDaysOfFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
}