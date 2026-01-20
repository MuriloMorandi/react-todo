import { NavLink } from "react-router";
import { Text } from "../ui/text";

export function MainLayoutFooter() {
  return (
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
  );
}
