import logo from "../assets/fastmet_logo.png";
import announcement from "../assets/announcement.png";
import HamburgerDesktop from "./Hamburger";
const PAGES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
export default function Header() {
  return (
    <div className="lg:px-16 px-4 md:py-4 py-3 justify-between items-center z-1 bg-[#0f2535] text-white sticky top-0 left-0 right-0 flex">
      <div className="flex gap-6 items-center">
        <HamburgerDesktop />
        <div className="flex gap-2 items-center cursor-pointer">
          <img
            src={logo}
            alt="Fastmet Logo"
            className="size-8 lg:size-10 object-contain"
          />
          <h1 className="font-bold text-sm lg:text-2xl">FastMet</h1>
        </div>
      </div>
      <div className="flex gap-20 items-center">
        <div className="lg:flex hidden gap-8">
          {PAGES.map((page) => (
            <a
              href={page.path}
              className="font-semibold hover:text-[#FFA840] transition-colors"
              key={page.name}
            >
              {page.name}
            </a>
          ))}
        </div>
        <div className="flex gap-6 items-center">
          <button className="font-bold bg-[#FFA840] px-4 py-1 rounded-xl hidden lg:block hover:bg-[#ED8718] transition-colors cursor-pointer">
            Log In
          </button>
          <img
            src={announcement}
            alt="Announcement Icon"
            className="size-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
