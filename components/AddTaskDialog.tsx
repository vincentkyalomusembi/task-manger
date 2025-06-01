"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

/**
 * AddTaskDialog renders a dialog with a form to create a new task.
 * It uses ShadCN dialog and button components for UI.
 * 
 * This component is reusable: wrap any button with it as a child.
 */
export default function AddTaskDialog({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Call mock API to create task
    const res = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);
    setTitle("");

    // Close modal and refresh page (or ideally invalidate query)
    if (res.ok) {
      window.location.reload(); // optional: improve with useQuery refetch
    } else {
      alert("Failed to create task");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Task"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
