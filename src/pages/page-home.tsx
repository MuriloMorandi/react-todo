import { TaskSummary } from "../components/core/task-summary";
import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";
import PlusIcon from "../assets/icons/plus.svg?react";
import { TaskList } from "../components/core/task-list";
import { useTask } from "../hooks/use-task";
import { useTasks } from "../hooks/use-tasks";
import { TaskState } from "../models/task";

export default function PageHome() {
  const { prepareTask } = useTask();
  const { tasks, loading } = useTasks();

  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSummary />
      </header>

      <section>
        <Button
          icon={PlusIcon}
          size="md"
          className="w-full"
          onClick={prepareTask}
          disabled={
            loading || tasks.some((task) => task.state === TaskState.Creating)
          }
        >
          Nova Tarefa
        </Button>
      </section>

      <TaskList />
    </Container>
  );
}
