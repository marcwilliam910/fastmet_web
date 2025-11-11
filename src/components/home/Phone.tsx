import {phone, phoneBG} from "@/constants/images";
import VehicleCarousel from "../VehicleCarousel";

export default function Phone() {
  return (
    <div className="flex flex-col gap-8 items-center md:px-5 lg:px-6 xl:px-10">
      <div
        className="xl:size-[27rem] lg:size-80 size-56 md:size-72 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${phoneBG})`}}
      >
        <img
          src={phone}
          alt="Phone Mockup"
          className="xl:size-[31rem] lg:size-96 size-60 md:size-80 object-contain"
        />
      </div>
      <div className="md:hidden">
        <VehicleCarousel />
      </div>
    </div>
  );
}
