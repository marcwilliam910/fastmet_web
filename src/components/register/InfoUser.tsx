import {
  BadgeCheck,
  Clock3,
  MapPin,
  PackageCheck,
  Percent,
  ShieldCheck,
} from "lucide-react";

const BENEFITS = [
  {
    icon: PackageCheck,
    title: "Send Anything, Anywhere",
    desc: "From parcels to cargo — book a delivery in seconds.",
  },
  {
    icon: Clock3,
    title: "Real-Time Tracking",
    desc: "Know exactly where your delivery is at every step.",
  },
  {
    icon: Percent,
    title: "Exclusive Launch Discounts",
    desc: "Pre-registered users get credits and discounts on their first orders.",
  },
  {
    icon: MapPin,
    title: "Metro Manila Coverage",
    desc: "Reliable delivery across all major cities from day one.",
  },
  {
    icon: BadgeCheck,
    title: "Early User Badge",
    desc: "A permanent badge that marks you as a FastMet founding user.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Insured Deliveries",
    desc: "Every booking is tracked and handled with care.",
  },
];

export default function InfoUser() {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 lg:flex-1 lg:pr-6 xl:pr-10 md:px-10">
      {/* Wordmark + tagline */}
      <div className="space-y-1 pt-10">
        <h1 className="font-extrabold text-2xl text-center md:text-left md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
          Deliver anything.
          <br />
          <span className="text-primary">Book in seconds.</span>
        </h1>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed pt-1 text-center md:text-left">
          Pre-registration is open for users in Metro Manila. Sign up now and be
          among the first to book when FastMet goes live — with exclusive early
          rewards waiting for you.
        </p>
      </div>
      {/* Benefits grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {BENEFITS.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
          >
            <div className="shrink-0 mt-0.5 size-8 rounded-lg bg-orange-50 flex items-center justify-center">
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
    </div>
  );
}
