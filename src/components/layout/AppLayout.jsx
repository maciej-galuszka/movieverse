import { Outlet } from "react-router-dom";
import Header from "../Header";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-dark">
      <Header />
      <main className="min-h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
