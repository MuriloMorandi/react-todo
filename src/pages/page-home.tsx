import { TaskSummary } from "../components/core/task-summary";
import { Button } from "../components/ui/button";
import { Container } from "../components/ui/container";
import PlusIcon from "../assets/icons/plus.svg?react";
import { TaskList } from "../components/core/task-list";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSummary />
      </header>

      <section>
        <Button icon={PlusIcon} size="md" className="w-full">
          Nova Tarefa
        </Button>
      </section>

      <TaskList />
    </Container>
  );
}
