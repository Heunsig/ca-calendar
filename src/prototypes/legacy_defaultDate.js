import render from '../render'
import { getDefaultDate } from '../helpers/date'

export default function () {
  let DateValue = getDefaultDate(options.date)
  this.month = DateValue.getMonth()
  this.date = DateValue.getDate()
  this.year = DateValue.getFullYear()
  render.call(this)
}