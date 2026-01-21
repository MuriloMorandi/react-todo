import { Badge } from "../ui/badge";
import { Text } from "../ui/text";

export function TaskSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="text-gray-300!">
          Tarefas concluídas
        </Text>
        <Badge variant="primary">1 de 5</Badge>
      </div>
    </>
  );
}
