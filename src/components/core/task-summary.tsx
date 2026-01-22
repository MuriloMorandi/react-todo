import { useTasks } from "../../hooks/use-tasks";
import { Badge } from "../ui/badge";
import { Text } from "../ui/text";

export function TaskSummary() {
  const { createdTasksCount, completedTasksCount, loading } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={loading}>
          {createdTasksCount}
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas concluídas
        </Text>
        <Badge
          variant="primary"
          loading={loading}
          className={loading ? "w-13!" : ""}
        >
          {completedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
