import { rider } from "@/constants/images";

export default function Info() {
  return (
    <div className="flex flex-col items-center lg:pt-10 gap-4 lg:h-full lg:flex-1 lg:mx-4 relative">
      {/* <div className="bg-[#F2F5FA] absolute top-0 h-full w-1/2"></div> */}
      <h1 className="font-bold text-lg tracking-wider text-primary uppercase md:text-2xl lg:text-3xl  lg:self-start">
        Welcome to FastMet
      </h1>
      <div className="space-y-2">
        <p className="text-xs text-center xl:text-base lg:text-start md:text-sm">
          We're excited to announce that pre-registration is now open for
          drivers in Metro Manila.
        </p>
        <p className="text-xs text-center md:text-sm lg:text-start xl:text-base">
          By signing up now, you'll be one of the first to be approved and ready
          to earn once we go live.
        </p>
      </div>


      <div className="space-y-4 hidden lg:block lg:mt-20 xl:mt-10 xl:ml-20">
        <h3 className="font-semibold text-center">
          Pre-Register Privileges:
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
       
 
        </div>
      </div>
       <img
          src={rider}
          alt="Rider"
          className="absolute -bottom-20 -left-32 hidden xl:block w-96 xl:w-[30rem] object-contain"
        />
    </div>
  );
}
