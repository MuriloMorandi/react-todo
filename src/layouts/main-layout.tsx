import { Outlet } from "react-router";
import { MainLayoutHeader } from "../components/layout/main-layout-header";
import { MainLayoutFooter } from "../components/layout/main-layout-footer";
import { MainLayoutContent } from "../components/layout/main-layout-content";

export function MainLayout() {
  return (
    <div className="min-h-svh flex flex-col">
      <MainLayoutHeader />
      <MainLayoutContent className="flex-1">
        <Outlet />
      </MainLayoutContent>
      <MainLayoutFooter />
    </div>
  );
}
