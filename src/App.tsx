import { Text } from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import { Icon } from "./components/icon";
import { Badge } from "./components/badge";
import { Button } from "./components/button";
import { ButtonIcon } from "./components/buttonIcon";
import { Input } from "./components/input";
import { Checkbox } from "./components/checkbox";
import { Card } from "./components/card";
import { Container } from "./components/container";
import { Skeleton } from "./components/skeleton";

export default function App() {
  return (
    <Container className="flex flex-col gap-4">
      <Text variant={"body-md"}>Olá Mundo</Text>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} />
        <Icon svg={SpinnerIcon} animate />
      </div>

      <div className="flex gap-1">
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
        <Badge loading>5</Badge>
      </div>

      <div className="flex gap-1">
        <Button icon={PlusIcon}>Click me</Button>
      </div>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PlusIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} loading />
      </div>

      <Input />
      <div className="flex gap-1">
        <Checkbox />
        <Checkbox loading />
      </div>

      <Card size={"md"}>Olá Mundo</Card>

      <div className="flex flex-col gap-2">
        <Skeleton className="h-5" />
        <Skeleton rounded={"sm"} className="w-96 h-5" />
      </div>
    </Container>
  );
}
