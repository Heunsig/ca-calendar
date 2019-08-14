// import options from '../stores/options'
// import elements from '../stores/elements'
// import render from '../render'
import { render } from '../system/renderer/calendarRenderers'

export default function () {
  console.log('print', this)
  this.options.target.appendChild(this.elements.calendar)
  render.call(this)
}