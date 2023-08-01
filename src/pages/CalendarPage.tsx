import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css"
import { TileArgs } from 'react-calendar/dist/cjs/shared/types';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
  const [value, onChange] = useState<Value>(new Date());

  const dates: { date: { start: Date, end: Date }, location: String }[] = [
    { date: { start: new Date("07/28/2023 0:00:00"), end: new Date("07/28/2023 18:00:00") }, location: "Halle (Saale)" },
    { date: { start: new Date("08/26/2023 0:00:00"), end: new Date("08/29/2023 18:00:00") }, location: "Halle (Saale)" }
  ]

  function isDate(args: TileArgs) {
    console.log(args.date);
    if (isInRange(args.date)) {
      return "react-calendar__tile--selected"
    }
    return "react-calendar__tile"
  }

  function isInRange(date: Date) {
    dates.forEach(element => {
      if (date >= element.date.start && date <= element.date.end) {
        console.log("IN RANGE: " + date + " react-calendar__tile--selected");
        return true
      }
    });
    return false
  }

  return (
    <div className='container'>
      <h1>Calendar</h1>
      <Calendar
        onChange={onChange}
        value={value}
        className="Calendar"
        minDetail="year"
        /* onClickDay={logDay} */
        showNeighboringMonth={false}
        tileContent={""}
        tileClassName={isDate} />
    </div>
  );
}