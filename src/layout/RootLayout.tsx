import Header from "@/components/Header";
import RewardModal from "@/components/modals/RewardModal";
import SharedFooter from "@/components/SharedFooter";
import {Outlet} from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Outlet />
      </main>
      <SharedFooter />

      <RewardModal />
    </div>
  );
}
