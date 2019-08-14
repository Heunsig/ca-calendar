import CaCalendarConstructor from './system/constructor/index'
import { 
  print,
  today,
  defaultDate,
  nextYear,
  previousYear,
  nextMonth,
  previousMonth,
  contents1,
  setDefaultContents,
  click
} from './prototypes/index'

const CaCalendar = function (target, opts) {

  CaCalendarConstructor.call(this, target, opts)

}

CaCalendar.prototype.print = print

CaCalendar.prototype.moveToToday = today

CaCalendar.prototype.moveToDefaultDate = defaultDate

CaCalendar.prototype.moveTonextYear = nextYear

CaCalendar.prototype.moveTopreviousYear = previousYear

CaCalendar.prototype.moveTonextMonth = nextMonth

CaCalendar.prototype.moveTopreviousMonth = previousMonth

CaCalendar.prototype.contents1 = contents1

CaCalendar.prototype.setDefaultContents = setDefaultContents

CaCalendar.prototype.click = click

export default CaCalendar