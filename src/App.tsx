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

export default function App() {
  return (
    <>
      <Text variant={"body-md"}>Olá Mundo</Text>
      <Icon svg={TrashIcon} />
      <Icon svg={SpinnerIcon} animate />
      <Badge variant="secondary">5</Badge>
      <Badge>2 de 5</Badge>
      <Button icon={PlusIcon}>Click me</Button>
      <ButtonIcon icon={TrashIcon} variant="tertiary" />
      <ButtonIcon icon={PlusIcon} variant="secondary" />
      <ButtonIcon icon={SpinnerIcon} />
      <Input />
      <Checkbox />
    </>
  );
}
