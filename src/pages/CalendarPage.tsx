import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css"
import { DialogProps } from '@mui/material/Dialog';
import Modal from '../Components/Modal';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type event = { date: { start: Date, end: Date }, location: String }

export default function CalendarPage() {
  const [value, onChange] = useState<Value>(new Date());
  const [open, setOpen] = useState(false);
  const [currEvent, setCurrenEvent] = useState<{ title: String, date: { start: Date, end: Date }, location: String }>({ title: "", date: { start: new Date(0), end: new Date(0) }, location: "" })

  const events: { title: String, date: { start: Date, end: Date }, location: String }[] = [
    { title: "Our first Date", date: { start: new Date("07/28/2023 0:00:00"), end: new Date("07/30/2023 23:59:59") }, location: "Halle (Saale)" },
    { title: "The time we got to witness football history", date: { start: new Date("08/26/2023 0:00:00"), end: new Date("08/28/2023 23:59:59") }, location: "Dortmund" },
    { title: "Our first time in Londong together", date: { start: new Date("09/06/2023 0:00:00"), end: new Date("09/17/2023 23:59:59") }, location: "London" },
  ]

  const handleClickOpen = (date: Date) => {
    for (let index = 0; index < events.length; index++) {
      const currDate = events[index];
      if (date >= currDate.date.start && date <= currDate.date.end) {
        setOpen(true);
        setCurrenEvent(currDate);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getTileClassName(date: Date) {
    for (let index = 0; index < events.length; index++) {
      const currDate = events[index];
      if (date >= currDate.date.start && date <= currDate.date.end) {
        return "react-calendar__tile--selected";
      }
    }
    return "react-calendar__tile";
  }

  return (
    <div className='container' id="calenderContainer">
      <Calendar
        onChange={onChange}
        value={value}
        className="Calendar"
        minDetail="year"
        onClickDay={(value, event) => handleClickOpen(value)}
        showNeighboringMonth={false}
        tileContent={""}
        tileClassName={({ date }) => getTileClassName(date)} />
      <Modal
        open={open}
        handleClose={handleClose}
        event={currEvent} ></Modal>
    </div>
  );
}
