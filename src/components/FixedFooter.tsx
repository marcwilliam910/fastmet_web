import {Facebook, MessageSquareMore, PhoneCall} from "lucide-react";
import {Link} from "react-router-dom";
import RewardModal from "./modals/RewardModal";

export default function Footer() {
  return (
    <footer className="bg-primary fixed z-[999] bottom-0 left-0 right-0 h-16 w-full justify-around flex items-center">
      <div className="flex flex-row items-center gap-5">
        <div>
          <RewardModal />
        </div>
        <Link
          className="px-4 hidden md:block py-2 rounded-full text-sm shadow-md bg-white font-bold xl:text-base xl:py-2.5 xl:px-5 hover:bg-zinc-100 transition-all duration-200"
          to="/driver-register"
        >
          Driver's Pre-Registration
        </Link>
        <Link
          className="px-4 py-2 hidden md:block rounded-full text-sm shadow-md bg-white font-bold xl:text-base xl:py-2.5 xl:px-5 hover:bg-zinc-100 transition-all duration-200"
          to="/user-register"
        >
          User's Pre-Registration
        </Link>
      </div>
      <div className="flex flex-row items-center gap-5 lg:gap-10">
        <div className="bg-white p-2 rounded-md">
          <Facebook className="size-6" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <PhoneCall className="size-6" />
        </div>
        <div className="bg-white p-2 rounded-md">
          <MessageSquareMore className="size-6" />
        </div>
      </div>
    </footer>
  );
}
