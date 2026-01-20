import { NavLink } from "react-router";
import { Container } from "../components/container";
import { Text } from "../components/text";
import { Outlet } from "react-router";

export function MainLayout() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        Ola mundo
      </Container>
      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>
      <footer className="my-5 md:my-10">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/" className="hover:underline">
            <Text>Tarefas</Text>
          </NavLink>

          <NavLink to="/components" className="hover:underline">
            <Text>Components</Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
