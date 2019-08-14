import CaCalendarConstructor from './system/constructor/index'
import { 
  print,
  today,
  defaultDate,
  nextYear,
  previousYear,
  nextMonth,
  previousMonth,
  setContents,
  setDefaultContents,
  click
} from './prototypes/index'

const CaCalendar = function (target, opts) {

  CaCalendarConstructor.call(this, target, opts)

}

CaCalendar.prototype.print = print

CaCalendar.prototype.today = today

CaCalendar.prototype.defaultDate = defaultDate

CaCalendar.prototype.nextYear = nextYear

CaCalendar.prototype.previousYear = previousYear

CaCalendar.prototype.nextMonth = nextMonth

CaCalendar.prototype.previousMonth = previousMonth

CaCalendar.prototype.setContents = setContents

CaCalendar.prototype.setDefaultContents = setDefaultContents

CaCalendar.prototype.click = click

export default CaCalendar