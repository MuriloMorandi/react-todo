import { Container } from "../components/ui/container";
import { Text } from "../components/ui/text";

export default function PageHome() {
  return (
    <Container className="flex flex-col gap-4">
      <Text variant={"body-md"}>Home</Text>
    </Container>
  );
}
