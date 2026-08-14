import { useState } from "react";

interface EventFormProps {
  onAdd: (event: { title: string; date: string; description: string }) => void;
}

export default function EventForm({ onAdd }: EventFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, date, description });
    setTitle(""); setDate(""); setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <input
        className="border p-1 mb-2 w-full"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-1 mb-2 w-full"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        className="border p-1 mb-2 w-full"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">
        Agregar Evento
      </button>
    </form>
  );
}
