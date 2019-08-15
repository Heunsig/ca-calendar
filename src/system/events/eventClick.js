import { convertToTwoDigit } from '../helpers/date'

export default function (handler) {
  let dateBoxs = document.querySelectorAll('.cac-date')

  for (let box of dateBoxs) {
    let fullDate = {
      standard: '',
      formatted: ''
    }

    let year = this.year
    let month = this.month
    let day = box.querySelector('.cac-date-text').innerHTML

    if (day) {
      fullDate.standard = `${year}-${convertToTwoDigit(month)}-${convertToTwoDigit(day)}`
      fullDate.formatted = `${convertToTwoDigit(month)}/${convertToTwoDigit(day)}/${year}`
    } else {
      fullDate = null
    }

    box.addEventListener('click', function (e) {
      handler(e, fullDate)
    })  
  }
}