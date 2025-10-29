import Model from "../Model";

export default function Info() {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-1 lg:mx-4 ">
      <h1 className="font-bold text-lg tracking-wider text-primary uppercase md:text-2xl lg:text-3xl lg:self-start">
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

      <div className="space-y-4 hidden lg:block lg:mt-20 xl:mt-15 xl:ml-25 ">
        <h3 className="font-semibold text-center">Pre-Register Privileges:</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-30 xl:size-24"></div>
        </div>
      </div>
      <div className="hidden xl:block absolute -bottom-0 -left-10">
        <Model />
      </div>
    </div>
  );
}
