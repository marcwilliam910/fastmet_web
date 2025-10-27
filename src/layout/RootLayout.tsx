import Header from "@/components/Header";
import SharedFooter from "@/components/SharedFooter";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <SharedFooter />
    </div>
  );
}
