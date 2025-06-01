"use client";

import TaskItem from "./TaskItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Task {
  id: number;
  title: string;
}

export default function TaskList({ tasks }: { tasks: Task[] }) {
  const queryClient = useQueryClient();

  // Delete Task Mutation
  const deleteTask = useMutation({
    mutationFn: async (id: number) => {
      await fetch(`/api/tasks?id=${id}`, { method: "DELETE" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  // Edit Task Mutation
  const editTask = useMutation({
    mutationFn: async ({ id, title }: { id: number; title: string }) => {
      await fetch(`/api/tasks`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          onDelete={(id) => deleteTask.mutate(id)}
          onEdit={(id, newTitle) => editTask.mutate({ id, title: newTitle })}
        />
      ))}
    </div>
  );
}
