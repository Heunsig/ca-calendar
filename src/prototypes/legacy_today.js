import render from '../render'

export default function () {  
  let today = new Date()
  this.month = today.getMonth()
  this.date = today.getDate()
  this.year = today.getFullYear()
  render.call(this)
}