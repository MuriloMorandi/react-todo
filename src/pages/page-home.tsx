import { Container } from "../components/container";
import { Text } from "../components/text";

export default function PageHome() {
  return (
    <Container className="flex flex-col gap-4">
      <Text variant={"body-md"}>Home</Text>
    </Container>
  );
}
