import { useTasks } from "../../hooks/use-tasks";
import type { Task } from "../../models/task";
import { TaskItem } from "./task-item";
import ListPlusIcon from "../../assets/icons/list-plus.svg?react";
import { Text } from "../ui/text";
import { Icon } from "../ui/icon";

export function TaskList() {
  const { tasks, loading, createdTasksCount } = useTasks();

  return (
    <section className="space-y-2 flex-1 flex flex-col ">
      {!loading && tasks.map((task) => <TaskItem key={task.id} task={task} />)}

      {!loading && !createdTasksCount && (
        <div className="flex flex-col items-center justify-center flex-1 gap-2">
          <Icon svg={ListPlusIcon} className="fill-gray-300" />
          <Text variant="body-sm-bold" className="text-gray-300!">
            Crie sua primeira tarefa!
          </Text>
        </div>
      )}

      {loading && (
        <>
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
          <TaskItem task={{} as Task} loading />
        </>
      )}
    </section>
  );
}
