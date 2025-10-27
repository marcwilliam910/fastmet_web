import {Facebook, MessageSquareMore, PhoneCall, Play} from "lucide-react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary py-3 w-full justify-around lg:flex hidden items-center">
      <div className="flex flex-row items-center gap-5">
        <h2 className="font-semibold text-lg xl:text-xl">Click here</h2>
        <div className="flex">
          <Play className="fill-white text-white size-5" />
          <Play className="fill-white text-white size-5" />
        </div>
        <Link
          className="px-4 py-2 rounded-full text-sm shadow-md bg-white font-bold xl:text-base xl:py-2.5 xl:px-5 hover:bg-zinc-100 transition-all duration-200"
          to="/register"
        >
          Driver's Pre-Registration
        </Link>
      </div>
      <div className="flex flex-row items-center gap-7">
        <div className="flex items-center flex-col gap-1">
          <div className="bg-white p-2 rounded-md">
            <Facebook className="size-5" />
          </div>
          <p className="text-white text-xs font-semibold">Facebook</p>
        </div>
        <div className="flex items-center flex-col gap-1">
          <div className="bg-white p-2 rounded-md">
            <PhoneCall className="size-5" />
          </div>
          <p className="text-white text-xs font-semibold">Contact Us</p>
        </div>
        <div className="flex items-center flex-col gap-1">
          <div className="bg-white p-2 rounded-md">
            <MessageSquareMore className="size-5" />
          </div>
          <p className="text-white text-xs font-semibold">Message Us</p>
        </div>
      </div>
    </footer>
  );
}
