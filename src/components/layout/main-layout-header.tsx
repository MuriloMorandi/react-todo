import { Container } from "../ui/container";
import LogoImg from "../../assets/images/logo.svg?react";

export function MainLayoutHeader() {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <LogoImg className="h-9 md:h-12" />
    </Container>
  );
}
