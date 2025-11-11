import megaphone from "../../assets/megaphone.png";
import VehicleCarousel from "../VehicleCarousel";

export default function Info() {
  return (
    <div className="flex flex-col gap-6 md:pl-4 lg:pl-6 items-center md:items-start xl:pl-0 xl:w-[50%]">
      <div className="flex flex-row px-4 py-2.5 bg-primary gap-4 items-center w-fit rounded-full">
        <img src={megaphone} alt="Megaphone" className="size-7" />
        <p className="font-semibold text-white">Gear up Metro Manila</p>
      </div>
      <p className="text-primary font-bold text-2xl xl:text-4xl uppercase tracking-wide">
        Heads Up Drivers!
      </p>
      <p className="font-semibold lg:text-xl xl:text-3xl text-sm hidden md:block">
        We're gearing up for a major expansion, and we want you on our team. By
        pre-registering
      </p>
      <div className="space-y-2 hidden md:block">
        <p className="font-medium text-xs xl:text-base">
          Are you a reliable driver who owns a safe, well-maintained vehicle?
        </p>
        <p className="font-medium text-xs xl:text-base">
          Are you looking for a flexible way to earn great money on your own
          schedule?
        </p>
      </div>
      <div className="hidden md:block">
        <VehicleCarousel />
      </div>
    </div>
  );
}
