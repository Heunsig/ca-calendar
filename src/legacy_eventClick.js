// export default function (handler) {
//   let dateBoxs = document.querySelectorAll('.cac-date')

//   for (let box of dateBoxs) {
//     let fullDate = {
//       standard: '',
//       formatted: ''
//     }

//     let date = box.querySelector('.cac-date-text').innerHTML

//     if (date) {
//       fullDate.standard = `${this.year}-${twoDigitMonth(this.month)}-${twoDigitDate(date)}`
//       fullDate.formatted = `${twoDigitMonth(this.month)}/${twoDigitDate(date)}/${this.year}`
//     } else {
//       fullDate = null
//     }

//     box.addEventListener('click', function (e) {
//       handler(e, fullDate)
//     })  
//   }
// }