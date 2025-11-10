import Header from "@/components/Header";
import FixedFooter from "@/components/FixedFooter";
import SharedFooter from "@/components/SharedFooter";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <SharedFooter />
      <FixedFooter />
    </div>
  );
}
