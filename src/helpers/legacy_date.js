// export function getDefaultDate (defaultDate) {
//   return defaultDate ? new Date(defaultDate) : new Date()
// }

// export function getFristDayOfTheWeek (month, year) {
//   let firstDate = new Date(MONTHNAMES[month] + ' 1, ' + year)
//   let firstDayOfTheWeek = firstDate.getDay()
//   return firstDayOfTheWeek
// }

// export function match_date (date1, date2) {
//   let date1_form_standard = `${date1.getYear()}-${date1.getMonth()}-${date1.getDate()}`
//   let date2_form_standard = `${date2.getYear()}-${date2.getMonth()}-${date2.getDate()}`

//   if (date1_form_standard === date2_form_standard) {
//     return true
//   } 

//   return false
// }

// export function generate_date (date) {
//   let newDate = new Date(date)
//   newDate.setMinutes( newDate.getMinutes() + newDate.getTimezoneOffset() )
//   return newDate
// }

// export function generate_date_form (year, month, date) {
//   return `${year}-${twoDigitMonth(month)}-${twoDigitDate(date)}`
// }

// export function twoDigitMonth (month) {
//   return ('0' + (month + 1)).slice(-2)
// }

// export function twoDigitDate (date) {
//   return ('0' + date).slice(-2)
// }

// export function getFebNumberOfDays (year) {
//   if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
//     return 29
//   } else {
//     return 28
//   }
// }

// export function setDayPerMonth (year) {
//   return [ 31, getFebNumberOfDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
// }