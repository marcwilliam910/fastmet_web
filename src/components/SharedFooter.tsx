import {Truck, User, Facebook, Instagram, Twitter} from "lucide-react";

export default function SharedFooter() {
  return (
    <footer className="bg-secondary flex flex-col items-center gap-8 w-full py-3 md:py-5">
      <h2 className="text-primary text-sm font-semibold md:text-xl text-center">
        "The future of your drive starts with one click. Pre-register."
      </h2>

      <div className="flex flex-col items-center gap-8 md:flex-row md:divide-x">
        {/* Statistics */}
        <div className="flex flex-col md:flex-row gap-5 items-center lg:gap-10">
          <div className="grid grid-cols-2 place-items-center">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-white font-medium text-xs lg:text-sm">
                Pre-Registered Drivers
              </p>
              <div className="flex items-center gap-2">
                <div className="p-1.5 border border-primary bg-white rounded-md w-fit">
                  <Truck className="fill-primary text-secondary lg:size-7" />
                </div>
                <p className="text-white font-bold">50</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
              <p className="text-white font-medium text-xs lg:text-sm">
                App Users
              </p>
              <div className="flex items-center gap-2">
                <div className="p-1.5 border border-primary bg-white rounded-md w-fit">
                  <User className="fill-primary text-secondary lg:size-7" />
                </div>
                <p className="text-white font-bold">500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-sm font-medium">Follow us on</p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
            >
              <Facebook className="size-5 md:size-6 text-white group-hover:text-secondary transition-colors" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
            >
              <Instagram className="size-5 md:size-6 text-white group-hover:text-secondary transition-colors" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary hover:scale-110 transition-all duration-300 group"
            >
              <Twitter className="size-5 md:size-6 text-white group-hover:text-secondary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-white text-xs md:text-sm">
        © 2025 FastMet. All rights reserved.
      </p>
    </footer>
  );
}
