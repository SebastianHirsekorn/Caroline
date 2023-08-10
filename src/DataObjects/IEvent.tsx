export default interface IEvent {
    title: string,
    date: { start: Date, end: Date },
    location: string,
    img: string
    eventEntries: {title: string, desc: string}[]
}