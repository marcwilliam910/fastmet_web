import { ClientFAQModal } from "@/components/modals/ClientFAQModal";
import { DriverFAQModal } from "@/components/modals/DriverFAQModal";
import {
  phoneBG,
  single_phone,
  closed_van,
  phone_map,
  wing_van,
} from "@/constants/images";
import { Link } from "react-router-dom";

export default function JoinSection() {
  return (
    <section className="flex flex-col xl:mx-40 md:mx-4 lg:mx-20 overflow-hidden">
      {/* Banner */}
      <div className="bg-primary px-6 py-4 xl:py-5 flex items-center justify-center">
        <h2 className="text-white font-extrabold text-center text-base md:text-xl xl:text-2xl uppercase tracking-wide leading-snug">
          Join FastMet Today — The Future of Delivery is Here!
        </h2>
      </div>

      {/* Subtext */}
      <div className="bg-white px-6 py-5 xl:py-6 border-x border-b border-orange-100 text-center">
        <p className="text-gray-600 text-xs md:text-sm xl:text-base max-w-2xl mx-auto leading-relaxed">
          Early registration is packed with exclusive rewards you won&apos;t
          want to miss! Pre-register now to be part of FastMet&apos;s founding
          community and be the first to experience the revolution in delivery
          services.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 border-x border-b border-orange-100 bg-white">
        {/* Driver Card */}
        <div className="flex flex-col items-center gap-5 px-6 py-8 xl:px-10 xl:py-10 border-b md:border-b-0 md:border-r border-orange-100 bg-gradient-to-b from-white to-[#FFF6ED]">
          {/* Card Header */}
          <div className="bg-primary rounded-full px-6 py-2.5 shadow-md">
            <span className="text-white font-bold text-sm md:text-base xl:text-lg">
              Be a FastMet Driver
            </span>
          </div>

          {/* Phone + Van Mockup */}
          <div
            className="size-44 md:size-48 lg:size-56 flex justify-center relative items-center bg-cover bg-center bg-no-repeat shrink-0"
            style={{ backgroundImage: `url(${phoneBG})` }}
          >
            <div className="absolute bg-gradient-to-b from-[#FFD07F] to-primary rounded-full blur-2xl size-40 md:size-52 opacity-40" />
            <img
              src={single_phone}
              alt="Phone Mockup"
              className="size-40 md:size-44 lg:size-52 scale-125 object-contain"
              draggable={false}
            />
            <img
              src={closed_van}
              alt="Closed Van"
              className="w-16 md:w-20 lg:w-24 object-contain absolute -bottom-3 -right-3 z-10"
              draggable={false}
            />
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-primary/30 rounded-full" />

          {/* Body */}
          <p className="text-gray-600 text-center text-xs md:text-sm xl:text-base leading-relaxed">
            Sign up today and get ready to be among the first to earn when
            FastMet goes live. Enjoy fast payments, flexible hours, and
            exclusive early rewards. Join the fastest-growing delivery service
            in the Philippines!
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-auto pt-2">
            <Link
              to="/driver-register"
              className="border border-primary text-primary bg-white cursor-pointer hover:bg-primary hover:text-white px-5 py-2 text-xs md:text-sm xl:text-base rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-sm inline-block"
            >
              Driver&apos;s Pre-Registration
            </Link>
            <DriverFAQModal />
          </div>
        </div>

        {/* User Card */}
        <div className="flex flex-col items-center gap-5 px-6 py-8 xl:px-10 xl:py-10 bg-gradient-to-b from-white to-[#FFF6ED]">
          {/* Card Header */}
          <div className="bg-primary rounded-full px-6 py-2.5 shadow-md">
            <span className="text-white font-bold text-sm md:text-base xl:text-lg">
              Be a FastMet User
            </span>
          </div>

          {/* Phone + Wing Van Mockup */}
          <div
            className="size-44 md:size-48 lg:size-56 flex justify-center relative items-center bg-cover bg-center bg-no-repeat shrink-0"
            style={{ backgroundImage: `url(${phoneBG})` }}
          >
            <div className="absolute bg-gradient-to-b from-[#FFD07F] to-primary rounded-full blur-2xl size-40 md:size-52 opacity-40" />
            <img
              src={phone_map}
              alt="Phone Map Mockup"
              className="size-40 md:size-44 lg:size-52 scale-125 object-contain"
              draggable={false}
            />
            <img
              src={wing_van}
              alt="Wing Van"
              className="w-16 md:w-20 lg:w-24 object-contain absolute -bottom-3 right-1 z-10"
              draggable={false}
            />
          </div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-primary/30 rounded-full" />

          {/* Body */}
          <p className="text-gray-600 text-center text-xs md:text-sm xl:text-base leading-relaxed">
            Be the first to book deliveries with FastMet once we go live, and
            unlock exclusive early rewards. Get the convenience of fast,
            reliable deliveries right at your fingertips. Pre-register now to
            get in on the action!
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 mt-auto pt-2">
            <Link
              to="/user-register"
              className="border border-primary text-primary bg-white cursor-pointer hover:bg-primary hover:text-white px-5 py-2 text-xs md:text-sm xl:text-base rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-sm inline-block"
            >
              User&apos;s Pre-Registration
            </Link>
            <ClientFAQModal />
          </div>
        </div>
      </div>
    </section>
  );
}
