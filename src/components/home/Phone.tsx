import { phone, phoneBG } from "@/constants/images";
import VehicleCarousel from "../VehicleCarousel";

export default function Phone() {
  return (
    <div className="flex flex-col gap-8 items-center md:px-5 lg:px-6 xl:px-10">
      <div className="relative xl:size-[27rem] lg:size-80 size-56 md:size-72 flex justify-center items-center">
        {/* Pulsing background circle */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse-ring rounded-full"
          style={{ backgroundImage: `url(${phoneBG})` }}
        />

        {/* Blinking sparkles */}
        <div className="absolute top-4 right-6 size-2 rounded-full bg-primary animate-blink-1" />
        <div className="absolute bottom-8 left-4 size-1.5 rounded-full bg-orange-400 animate-blink-2" />
        <div className="absolute top-1/3 left-2 size-2 rounded-full bg-yellow-400 animate-blink-3" />

        {/* Floating phone */}
        <img
          src={phone}
          alt="Phone Mockup"
          className="relative z-10 xl:size-[31rem] lg:size-96 size-60 md:size-80 object-contain animate-float"
          draggable={false}
        />
      </div>
      <div className="md:hidden">
        <VehicleCarousel />
      </div>
    </div>
  );
}
