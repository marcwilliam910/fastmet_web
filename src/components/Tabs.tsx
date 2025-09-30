import homeIcon from "../assets/sidebar_icons/home.png";
import messageIcon from "../assets/tabs_icons/message_inactive.png";
import bookingIcon from "../assets/tabs_icons/booking_inactive.png";
import walletIcon from "../assets/tabs_icons/wallet_inactive.png";
import notifIcon from "../assets/tabs_icons/notif_inactive.png";

const TABS = [
  {
    name: "Home",
    icon: homeIcon,
    path: "/",
  },
  {
    name: "Request",
    icon: bookingIcon,
    path: "/request",
  },
  {
    name: "Wallet",
    icon: walletIcon,
    path: "/wallet",
  },
  {
    name: "Chat",
    icon: messageIcon,
    path: "/chat",
  },
  {
    name: "Notifications",
    icon: notifIcon,
    path: "/notifications",
  },
];

export default function () {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-[#0f2535] lg:hidden">
      <div className="flex justify-between items-center px-2 py-4 gap-2">
        {TABS.map((tab) => (
          <a
            href={tab.path}
            className="flex flex-col gap-2 items-center flex-1"
          >
            <img src={tab.icon} alt={tab.name} className="size-5" />
            <span
              className={`text-xs font-medium  ${
                tab.name === "Home" ? "text-[#FFA840]" : "text-gray-400"
              }`}
            >
              {tab.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
