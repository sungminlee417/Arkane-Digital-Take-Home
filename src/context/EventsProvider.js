import { createContext, useState, useEffect } from "react";
import eventData from "../data/mockData.json";

export const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(setEvents(eventData));
        }, 1000);
      });
    };
    fetchEvents();
  }, []);

  const contextValue = { events, setEvents };

  return (
    <EventsContext.Provider value={contextValue}>
      {children}
    </EventsContext.Provider>
  );
};
