export function getInitDate (assignedDate) {
  return assignedDate ? new Date(assignedDate) : new Date()
}

export function getMDY (dateString=null) {
  let month
  let day
  let year

  const setDate = getInitDate(dateString)
  month = setDate.getMonth()
  day = setDate.getDate()
  year = setDate.getFullYear()

  return {
    month,
    day,
    year
  }
}

export function generateDate (date) {
  let newDate = new Date(date)
  newDate.setMinutes( newDate.getMinutes() + newDate.getTimezoneOffset() )
  return newDate
}

export function generateDateForm (year, month, day) {
  return `${year}-${convertToTwoDigit(month + 1)}-${convertToTwoDigit(day)}`
}

export function convertToTwoDigit (month) {
  return ('0' + parseInt(month)).slice(-2)
}

export function convertToBasicDateFormat (date, format) {
  let month
  let day
  let year

  let pattern = /m{2}|m{1}|d{2}|d{1}|y{4}|y{2}/g
  let result

  while (result = pattern.exec(format)) {
    
    let str = date.slice(result.index, result[0].length + result.index)
    switch (result[0]) {
      case 'yyyy':
      case 'yy':
        year = str
        break
      case 'm':
      case 'mm':
        month = str
        break
      case 'd':
      case 'dd':
        day = str
        break
    }
  }

  return `${year}-${convertToTwoDigit(month)}-${convertToTwoDigit(day)}`
  // 'yyyy' -> 0000 ~ 9999
  // 'yy' -> 00 ~ 99
  // 'm' -> 1 ~ 12
  // 'mm' -> 01 ~ 12
  // 'd' -> 1 ~ 31
  // 'dd' -> 01 ~ 31
}


export function matchDate (date1, date2) {
  let date1_form_standard = `${date1.getYear()}-${date1.getMonth()}-${date1.getDate()}`
  let date2_form_standard = `${date2.getYear()}-${date2.getMonth()}-${date2.getDate()}`

  if (date1_form_standard === date2_form_standard) {
    return true
  } 

  return false
}