import { useTasks } from "../../hooks/use-tasks";
import type { Task } from "../../models/task";
import { TaskItem } from "./task-item";

export function TaskList() {
  const { tasks, loading } = useTasks();

  return (
    <section className="space-y-2 h-full">
      {!loading && tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      {loading && (
        <>
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
        </>
      )}
    </section>
  );
}
