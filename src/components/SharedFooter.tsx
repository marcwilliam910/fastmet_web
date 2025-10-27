import { Truck, User } from "lucide-react";

export default function SharedFooter() {
  return (
    <footer className="bg-secondary flex flex-col items-center gap-8 w-full py-3 md:py-5">
      <h2 className="text-primary font-semibold md:text-xl text-center">
        "The future of your drive starts with one click. Pre-register."
      </h2>
      <div className="flex flex-col md:flex-row gap-5 items-center lg:gap-10">
        {/* top */}
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
        {/* privileges */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-white font-medium text-xs lg:text-sm">
            Pre-Register Priviledges:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <div className="size-12 rounded-md bg-white border border-primary" />
            <div className="size-12 rounded-md bg-white border border-primary" />
            <div className="size-12 rounded-md bg-white border border-primary" />
            <div className="size-12 rounded-md bg-white border border-primary" />
            <div className="size-12 rounded-md bg-white border border-primary" />
          </div>
        </div>
      </div>

      <div className="w-full bg-primary p-4 flex justify-center items-center">
        <p className="text-white text-sm">
          © 2025 FastMet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
