import {ArrowBigRight} from "lucide-react";
import {logo} from "@/constants/images";
import InfoModal from "./InfoModal";

export default function Header() {
  return (
    <header className="lg:px-16 px-4 md:py-4 py-3 justify-between items-center z-50 bg-secondary text-white fixed top-0 left-0 right-0 flex">
      <div className="flex gap-6 items-center justify-between w-full">
        <div className="flex gap-2 items-center cursor-pointer">
          <img
            src={logo}
            alt="Fastmet Logo"
            className="size-8 lg:size-10 object-contain"
          />
          <h1 className="font-bold text-sm lg:text-2xl">FastMet</h1>
        </div>
        <div className="flex flex-row items-center gap-5">
          <p className="font-semibold hidden md:block">Tap for more info</p>
          <ArrowBigRight className="hidden md:block fill-primary text-primary size-8" />
          <InfoModal />
        </div>
      </div>
    </header>
  );
}
