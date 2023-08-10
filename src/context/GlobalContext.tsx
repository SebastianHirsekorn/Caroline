import { createContext, useState } from "react";
import IEvent from "../DataObjects/IEvent.js"
/**
 * Null Objekt für IUserProfile für Initialisierung
 */
const nullEvent: IEvent = { title: "", date: { start: new Date(0), end: new Date(0) }, location: "", img: "", eventEntries: [] };

/**
 * Initisal value of all Events.
 */
const nullEvents: IEvent[] = [];

export const GlobalContext = createContext({
  events: nullEvents,
  user: "hi",
  setEvents: (events: IEvent[]) => { },
  setUser: (user: any) => { },
});

/**
 * Context Provider for myGisaApp
 */
export const GlobalContextProvider = (props: any) => {
  const [events, setEventsToState] = useState<IEvent[]>([]);
  const [user, setUserToState] = useState<any>("hi");

  const setEvents = (allEvents: IEvent[]) => {
    setEventsToState(allEvents);
  };

  const setUser = (user: any) => {
    setUserToState(user);
  }


  return (
    <GlobalContext.Provider
      value={{
        events,
        user,
        setEvents,
        setUser
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
