const calendar = new CaCalendar(document.querySelector('#calendar'), {
  // date: '09/12/2018',
  is_simplified: true
})

calendar.print()
// calendar.moveToToday()

console.log('CaCalendar', calendar)

calendar.addSchedules([
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
    date: '08/17/2019',
    format: 'mm/dd/yyyy',
    items: [
      {
        label: 'test',
        value: 'hi'
      },
      {
        label: 'good',
        value: 'ss'
      }
    ]
  }
])

calendar.addSchedules([
  {
    date: '08/15/2019',
    items: [
      {
        label: 'Gwang',
        value: 'Bokjul'
      }
    ]
  }
])

calendar.print()

// console.log('Ca >>', calendar)
// calendar.print()
// CaCalendar.click((e, date) => {
//   console.log(date)
// })
// calendar.addSchedules([
//   {
//     date: '2018-06-11',
//     items: [
//       {
//         label: 'test1',  
//         value: 's'
//       },
//       {
//         label: 'test2',  
//         value: 's'
//       }
//     ]
//   },
//   {
//     date: '05/22/2018',
//     items: [
//       {
//         label: 'test1',  
//         value: 's'
//       },
//       {
//         label: 'test2',  
//         value: 's'
//       }
//     ]
//   },
//   {
//     date: '05/23/2018',
//     items: [
//       {
//         label: 'test1',  
//         value: 's'
//       }
//     ]
//   },
//   {
//     date: '08/17/2019',
//     items: [
//       {
//         label: 'test',
//         value: 'hi'
//       },
//       {
//         label: 'good',
//         value: 'ss'
//       }
//     ]
//   }
// ])

// calendar.print()
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