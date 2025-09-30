import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import hamburger from "../assets/hamburger.png";
import homeIcon from "../assets/sidebar_icons/home.png";
import profileIcon from "../assets/sidebar_icons/profile.png";
import messageIcon from "../assets/sidebar_icons/message.png";
import bookingIcon from "../assets/sidebar_icons/booking.png";
import walletIcon from "../assets/sidebar_icons/wallet.png";
import notifIcon from "../assets/sidebar_icons/notif.png";
import settingsIcon from "../assets/sidebar_icons/settings.png";
import aboutIcon from "../assets/sidebar_icons/about.png";
import driverIcon from "../assets/sidebar_icons/driver.png";
import logoutIcon from "../assets/sidebar_icons/logout.png";

const PAGES = [
  {name: "Home", icon: homeIcon, path: "/"},
  {name: "My Profile", icon: profileIcon, path: "/profile"},
  {name: "Message", icon: messageIcon, path: "/message"},
  {name: "My Booking", icon: bookingIcon, path: "/booking"},
  {name: "Wallet", icon: walletIcon, path: "/wallet"},
  {name: "Notifications", icon: notifIcon, path: "/notifications"},
  {name: "Settings", icon: settingsIcon, path: "/settings"},
  {name: "About", icon: aboutIcon, path: "/about"},
  {name: "Apply as Driver", icon: driverIcon, path: "/driver"},
  {name: "Sign Out", icon: logoutIcon, path: "/logout"},
];

const includedOnMobile = [
  "My Profile",
  "Settings",
  "About",
  "Apply as Driver",
  "Sign Out",
];

export default function HamburgerDesktop() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="cursor-pointer">
          <img src={hamburger} alt="Hamburger Icon" className="h-4" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#0f2535] text-white border-none lg:w-72 flex flex-col pt-10"
      >
        <SheetTitle className="sr-only">FastMet</SheetTitle>
        <div className="flex flex-col gap-2 py-6 w-full">
          {PAGES.map((page) => (
            <a
              href={page.path}
              key={page.name}
              className={`items-center gap-4 px-6 py-3 w-full hover:bg-[#13314a] transition ${
                includedOnMobile.includes(page.name) ? "flex" : "hidden lg:flex"
              }`}
            >
              <img src={page.icon} alt={page.name} className="w-6 h-6" />
              <span className="font-semibold">{page.name}</span>
            </a>
          ))}
        </div>

        <SheetFooter>
          <p className="text-sm text-gray-400 text-center">www.fastmet.com</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
