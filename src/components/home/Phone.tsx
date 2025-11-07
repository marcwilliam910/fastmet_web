import {
  motor,
  phone,
  phoneBG,
  sedan,
  truck2,
  truck4,
} from "@/constants/images";

export default function Phone() {
  return (
    <div className="flex flex-col gap-8 items-center md:px-5 lg:px-6 xl:px-10">
      <div
        className="xl:size-[27rem] lg:size-80 size-56 md:size-72 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${phoneBG})` }}
      >
        <img
          src={phone}
          alt="Phone Mockup"
          className="xl:size-[31rem] lg:size-96 size-60 md:size-80 object-contain"
        />
      </div>
      <div className="flex flex-row gap-3 md:hidden">
        {/* motor */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#42FFEF] to-[#1F7CF6] shadow-md">
          <div className="size-16 md:size-44 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF]">
            <img
              src={motor}
              alt="Motorcycle"
              className="size-10 md:size-16 drop-shadow-md object-contain"
            />
          </div>
        </div>
        {/* sedan */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#42FFEF] to-[#1F7CF6] shadow-md">
          <div className="size-16 md:size-44 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF]">
            <img
              src={sedan}
              alt="Sedan"
              className="size-10 md:size-16 drop-shadow-md object-contain scale-125"
            />
          </div>
        </div>
        {/* pickup */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#42FFEF] to-[#1F7CF6] shadow-md">
          <div className="size-16 md:size-44 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF]">
            <img
              src={truck2}
              alt="Pickup Truck"
              className="size-10 md:size-16 drop-shadow-md object-contain scale-125"
            />
          </div>
        </div>
        {/* suv */}
        <div className="p-[2px] rounded-2xl bg-gradient-to-b from-[#42FFEF] to-[#1F7CF6] shadow-md">
          <div className="size-16 md:size-44 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF]">
            <img
              src={truck4}
              alt="SUV"
              className="size-10 md:size-16 drop-shadow-md object-contain scale-120"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
