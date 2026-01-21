import { TaskSummary } from "../components/core/task-summary";
import { Container } from "../components/ui/container";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between">
        <TaskSummary />
      </header>
    </Container>
  );
}
