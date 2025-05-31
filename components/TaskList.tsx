import { Card } from "@/components/ui/card";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <Card key={task.id} className="p-4">
          <div className="flex justify-between">
            <span>{task.title}</span>
            <span
              className={`text-sm ${
                task.completed ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {task.completed ? "Done" : "Pending"}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
