"use client";

import { useQuery } from "@tanstack/react-query";
import TaskList from "@/components/TaskList";

export default function DashboardPage() {
  // Fetch tasks from API
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading tasks...</p>;
  if (isError) return <p>Failed to load tasks.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4">Your Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
