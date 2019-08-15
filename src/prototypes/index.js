import render from '../system/renderer/calendarRenderer'
import { getMDY } from '../system/helpers/date'

export function print () {
  this.options.target.appendChild(this.elements.calendar)
  render.call(this)
}

export function moveToToday () {  
  // let today = new Date()
  let today = getMDY()
  this.month = today.month
  this.date = today.date
  this.year = today.year
  render.call(this)
}

export function moveToAssignedDate () {
  let DateValue = getMDY(options.date)
  this.month = DateValue.month
  this.date = DateValue.date
  this.year = DateValue.year
  render.call(this)
}

export function moveToNextMonth () {
  this.month = this.month + 1
  if (this.month > 11) {
    this.year = this.year + 1
    this.month = 0
  }
  render.call(this)
}

export function moveToPreviousMonth () {
  this.month = this.month - 1
  if (this.month < 0) {
    this.year = this.year - 1
    this.month = 11
  }
  render.call(this)
}

export function moveToNextYear () {
  this.year = this.year + 1
  render.call(this)
}

export function moveToPreviousYear () {
  this.year = this.year - 1
  render.call(this)
}

export function addSchedules (valContents) {
  try {
    this.schedules = valContents  
  } catch (e) {
    return console.error(e)
  }

  render.call(this)
}

// export function setDefaultContents (contents) {
//   this.setContents = contents
//   render.call(this)
// }

export function click (handler) {
  this.events.click = handler
  render.call(this)
}