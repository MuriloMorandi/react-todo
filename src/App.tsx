import { Text } from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import { Icon } from "./components/icon";
import { Badge } from "./components/badge";

export default function App() {
  return (
    <>
      <Text variant={"body-md"}>Olá Mundo</Text>
      <Icon svg={TrashIcon} />
      <Icon svg={SpinnerIcon} animate />
      <Badge variant="secondary">5</Badge>
      <Badge>2 de 5</Badge>
    </>
  );
}
