import logo from "../assets/logo.png";

export default function ComingSoon() {
  return (
    <div className="flex flex-col gap-5 items-center lg:flex-1 lg:gap-10">
      <img src={logo} alt="FastMet Logo" className="w-32 lg:w-48 xl:w-56" />
      <h1 className="text-3xl md:text-4xl font-bold text-[#FFA840]">
        Coming Soon!
      </h1>
    </div>
  );
}
