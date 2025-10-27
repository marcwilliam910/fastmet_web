export default function Info() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-lg tracking-wider text-primary uppercase">
        Welcome to FastMet
      </h1>
      <div className="space-y-2">
        <p className="text-xs text-center">
          We're excited to announce that pre-registration is now open for
          drivers in Metro Manila.
        </p>
        <p className="text-xs text-center">
          By signing up now, you'll be one of the first to be approved and ready
          to earn once we go live.
        </p>
      </div>

      {/* <div className="space-y-2 ">
        <h3 className="font-semibold text-xs text-center">
          Pre-Register Privileges:
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border-2 border-orange-400 size-16"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-16"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-16"></div>
          <div className="bg-white rounded-lg border-2 border-orange-400 size-16"></div>
        </div>
      </div> */}
    </div>
  );
}
