// import render from '../render'
import { render } from '../system/renderer/calendarRenderers'

export default function () {
  this.month = this.month + 1
  if (this.month > 11) {
    this.year = this.year + 1
    this.month = 0
  }
  render.call(this)
}