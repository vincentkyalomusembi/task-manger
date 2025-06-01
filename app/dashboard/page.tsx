"use client";

import { useQuery } from "@tanstack/react-query";
import TaskList from "@/components/TaskList";
import { Button } from "@/components/ui/button";
import AddTaskDialog from "@/components/AddTaskDialog";

/**
 * DashboardPage is the main dashboard view where the user
 * can see their tasks and create new ones using the AddTaskDialog.
 */
export default function DashboardPage() {
  // Fetch tasks using React Query from /api/tasks
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      return res.json();
    },
  });

  // Show loading state while fetching
  if (isLoading) return <p>Loading tasks...</p>;

  // Show error message if the fetch fails
  if (isError) return <p>Failed to load tasks.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Your Tasks</h1>
        
        {/* Add Task Dialog Button */}
        <AddTaskDialog>
          <Button>Add Task</Button>
        </AddTaskDialog>
      </div>

      {/* Render Task List */}
      <TaskList tasks={tasks} />
    </div>
  );
}
