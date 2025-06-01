"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

export default function TaskItem({ id, title, onDelete, onEdit }: Task) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    onEdit(id, newTitle);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded mb-2">
      {editing ? (
        <input
          className="border px-2 py-1 rounded mr-2 flex-1"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{title}</span>
      )}

      <div className="space-x-2">
        {editing ? (
          <button onClick={handleSave} className="text-blue-600">Save</button>
        ) : (
          <button onClick={() => setEditing(true)} className="text-green-600">Edit</button>
        )}
        <button onClick={() => onDelete(id)} className="text-red-600">Delete</button>
      </div>
    </div>
  );
}
