import { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../styles/Calendar.css"
import Modal from '../Components/Modal';
import IEvent from '../DataObjects/IEvent';
import {GlobalContext} from '../context/GlobalContext';
import { Value } from 'react-calendar/dist/cjs/shared/types';


export default function CalendarPage() {
  const ctx = useContext(GlobalContext);

  const [value, onChange] = useState<Value>(new Date());
  const [open, setOpen] = useState(false);
  const [currEvent, setCurrenEvent] = useState<IEvent>({ title: "", date: { start: new Date(0), end: new Date(0) }, location: "", img: "", eventEntries: [] })

  const handleClickOpen = (date: Date) => {
    for (let index = 0; index < ctx.events.length; index++) {
      const currDate = ctx.events[index];
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
    for (let index = 0; index < ctx.events.length; index++) {
      const currDate = ctx.events[index];
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
