// components/TaskCard.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.status}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{task.description}</p>
      </CardContent>
    </Card>
  );
}
