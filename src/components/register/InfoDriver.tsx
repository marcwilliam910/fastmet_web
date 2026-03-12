import { phone, phoneBG } from "@/constants/images";
import {
  BadgeCheck,
  Banknote,
  Clock3,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Banknote,
    title: "Earn on Every Delivery",
    desc: "Competitive rates with transparent pay — know exactly what you earn.",
  },
  {
    icon: Clock3,
    title: "Flexible Schedule",
    desc: "Drive when you want. No fixed hours, no quotas.",
  },
  {
    icon: Zap,
    title: "First to Go Live",
    desc: "Pre-registered drivers get priority approval when we launch.",
  },
  {
    icon: MapPin,
    title: "Metro Manila Coverage",
    desc: "Start earning across all major cities from day one.",
  },
  {
    icon: BadgeCheck,
    title: "Founding Driver Badge",
    desc: "Exclusive badge for early drivers — a mark of your commitment.",
  },
  {
    icon: ShieldCheck,
    title: "Backed & Protected",
    desc: "Ride with confidence. FastMet supports every driver on the road.",
  },
];

export default function InfoDriver() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 lg:flex-1 lg:pr-6 xl:pr-10 md:px-14">
      {/* Wordmark + tagline */}
      <div className="space-y-1 pt-10">
        <h1 className="font-extrabold text-2xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
          Drive with us.
          <br />
          <span className="text-primary">Earn from day one.</span>
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed pt-1 text-center md:text-left">
          Pre-registration is open for drivers in Metro Manila. Sign up now and
          be among the first to earn when FastMet goes live.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {BENEFITS.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
          >
            <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-primary/8 flex items-center justify-center">
              <Icon className="size-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 leading-tight">
                {title}
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Phone mockup — desktop only */}
      <div className="hidden lg:flex justify-center items-center mt-auto">
        <div
          className="size-56 xl:size-64 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${phoneBG})` }}
        >
          <img
            src={phone}
            alt="FastMet App"
            className="size-72 xl:size-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
