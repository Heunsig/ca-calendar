import render from '../render'

export default function () {
  this.year = this.year - 1
  render.call(this)
}