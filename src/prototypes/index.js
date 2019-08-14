// import render from '../render'
import { render } from '../system/renderer/calendarRenderers'
import { getDefaultDate } from '../helpers/date'

export function print () {
  this.options.target.appendChild(this.elements.calendar)
  render.call(this)
}

export function today () {  
  let today = new Date()
  this.month = today.getMonth()
  this.date = today.getDate()
  this.year = today.getFullYear()
  render.call(this)
}

export function defaultDate () {
  let DateValue = getDefaultDate(options.date)
  this.month = DateValue.getMonth()
  this.date = DateValue.getDate()
  this.year = DateValue.getFullYear()
  render.call(this)
}

export function nextMonth () {
  this.month = this.month + 1
  if (this.month > 11) {
    this.year = this.year + 1
    this.month = 0
  }
  render.call(this)
}

export function previousMonth () {
  this.month = this.month - 1
  if (this.month < 0) {
    this.year = this.year - 1
    this.month = 11
  }
  render.call(this)
}

export function nextYear () {
  this.year = this.year + 1
  render.call(this)
}

export function previousYear () {
  this.year = this.year - 1
  render.call(this)
}

export function setContents (valContents) {
  this.contents = valContents
  render.call(this)
}

export function setDefaultContents (contents) {
  this.defaultContents = contents
  render.call(this)
}

export function click (handler) {
  this.events.click = handler
  render.call(this)
}