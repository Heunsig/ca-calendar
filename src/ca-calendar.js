import CaCalendarConstructor from './system/constructor/index'
import { 
  print,
  moveToToday,
  moveToAssignedDate,
  moveToNextYear,
  moveToPreviousYear,
  moveToNextMonth,
  moveToPreviousMonth,
  addSchedules,
  setDefaultContents,
  click
} from './prototypes/index'

const CaCalendar = function (target, opts) {

  CaCalendarConstructor.call(this, target, opts)

}

CaCalendar.prototype.print = print

CaCalendar.prototype.moveToToday = moveToToday

CaCalendar.prototype.moveToAssignedDate = moveToAssignedDate

CaCalendar.prototype.moveToNextYear = moveToNextYear

CaCalendar.prototype.moveToPreviousYear = moveToPreviousYear

CaCalendar.prototype.moveToNextMonth = moveToNextMonth

CaCalendar.prototype.moveToPreviousMonth = moveToPreviousMonth

CaCalendar.prototype.addSchedules = addSchedules

// CaCalendar.prototype.setDefaultContents = setDefaultContents

CaCalendar.prototype.click = click

export default CaCalendar