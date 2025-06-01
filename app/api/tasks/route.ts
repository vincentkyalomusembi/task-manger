// app/api/tasks/route.ts

import { NextResponse } from "next/server";

// In-memory mock database for tasks (for development only)
const tasks: { id: number; title: string }[] = [];

// Handle GET requests: return all tasks
export async function GET() {
  return NextResponse.json(tasks);
}

// Handle POST requests: create a new task
export async function POST(request: Request) {
  const body = await request.json();
  const { title } = body;

  if (!title) {
    return new NextResponse(JSON.stringify({ error: "Title is required" }), {
      status: 400,
    });
  }

  const newTask = { id: Date.now(), title };
  tasks.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}
