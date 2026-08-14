import { useState } from "react";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Omit<Event, "id">) => {
    setEvents([...events, { ...event, id: events.length + 1 }]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Eventos</h1>
      <EventForm onAdd={addEvent} />
      <EventList events={events} />
    </div>
  );
}
