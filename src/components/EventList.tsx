
interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface EventListProps {
  events: Event[];
}

export default function EventList({ events }: EventListProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Lista de Eventos</h2>
      <ul className="space-y-2">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-3 border rounded shadow-sm bg-white"
          >
            <h3 className="font-bold">{event.title}</h3>
            <p>{event.date}</p>
            <p className="text-gray-600">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
