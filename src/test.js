// console.log(CaCalendar)
// // console.log(window)
var calendar = new CaCalendar(document.querySelector('#calendar'), {
  is_simplified: true
})

calendar.print()

// console.log('Ca >>', calendar)
// calendar.print()
// CaCalendar.click((e, date) => {
//   console.log(date)
// })
calendar.setContents([
  {
    date: '2018-06-11',
    items: [
      {
        label: 'test1',  
        value: 's'
      },
      {
        label: 'test2',  
        value: 's'
      }
    ]
  },
  {
    date: '05/22/2018',
    items: [
      {
        label: 'test1',  
        value: 's'
      },
      {
        label: 'test2',  
        value: 's'
      }
    ]
  },
  {
    date: '05/23/2018',
    items: [
      {
        label: 'test1',  
        value: 's'
      }
    ]
  }
])
// CaCalendar.setDefaultContents([
//   {
//     label: 'test1',
//     value: 'Hello'
//   },
//   {
//     label: 'test2',
//     value: 23
//   }
// ])