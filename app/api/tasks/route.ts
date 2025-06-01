import { NextResponse } from "next/server";

const tasks: { id: number; title: string }[] = [];

// GET: return all tasks
export async function GET() {
  return NextResponse.json(tasks);
}

// POST: create new task
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

// PATCH: update task title
export async function PATCH(request: Request) {
  const { id, title } = await request.json();

  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return new NextResponse(JSON.stringify({ error: "Task not found" }), {
      status: 404,
    });
  }

  task.title = title;
  return NextResponse.json(task);
}

// DELETE: remove task by ID
export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = parseInt(url.searchParams.get("id") || "", 10);

  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return new NextResponse(JSON.stringify({ error: "Task not found" }), {
      status: 404,
    });
  }

  tasks.splice(index, 1);
  return NextResponse.json({ success: true });
}
