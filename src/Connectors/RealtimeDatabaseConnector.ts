import IEvent from "../DataObjects/IEvent";

export default function JsonToIEvent(eventsFromDb: any) {
  const events: IEvent[] = eventsFromDb.map((event: any) => ({
    title: event.title,
    date: {
      start: new Date(event.date.start),
      end: new Date(event.date.end),
    },
    location: event.location,
    img: event.img,
    eventEntries: event.eventEntries,
  }));
  return events;
}
