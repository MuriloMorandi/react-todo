import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import { MainLayout } from "./layouts/main-layout";
import PageHome from "./pages/page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
