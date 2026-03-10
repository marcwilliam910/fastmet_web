import {phone, phoneBG} from "@/constants/images";

export default function Info() {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-1 lg:mx-4 lg:pt-5 lg:justify-center xl:justify-start">
      <h1 className="font-bold text-lg tracking-wider text-primary uppercase md:text-2xl lg:text-3xl">
        Welcome to FastMet
      </h1>
      <div className="space-y-2">
        <p className="text-xs text-center xl:text-base  md:text-sm">
          We're excited to announce that pre-registration is now open for
          drivers in Metro Manila.
        </p>
        <p className="text-xs text-center md:text-sm xl:text-base">
          By signing up now, you'll be one of the first to be approved and ready
          to earn once we go live.
        </p>
      </div>

      <div className="hidden lg:flex justify-center lg:mt-15 items-center">
        <div
          className=" lg:size-80 size-56 md:size-72 flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: `url(${phoneBG})`}}
        >
          <img
            src={phone}
            alt="Phone Mockup"
            className="xl:size-[31rem] lg:size-96 size-60 md:size-80 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
