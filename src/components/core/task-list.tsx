import { TaskItem } from "./task-item";

export function TaskList() {
  return (
    <section className="space-y-2">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </section>
  );
}
