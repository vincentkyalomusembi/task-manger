import { NextResponse } from "next/server";

// Mocked list of tasks
const mockTasks = [
  { id: 1, title: "Complete assignment", completed: false },
  { id: 2, title: "Study for exam", completed: true },
  { id: 3, title: "Fix bug in code", completed: false },
];

// Handle GET requests to return the mock tasks
export async function GET() {
  return NextResponse.json(mockTasks);
}
