import Footer from "@/components/home/Footer";
import Info from "@/components/home/Info";
import Phone from "@/components/home/Phone";
import {logo} from "@/constants/images";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <section className="flex justify-center flex-col min-h-lvh w-full">
        <div className="flex flex-col lg:flex-1 md:flex-row gap-8 items-center justify-center">
          <Info />
          <Phone />
        </div>
        <Footer />
      </section>
      <section className="px-4 py-4 lg:px-20 xl:px-40">
        <div className=" p-4  bg-[linear-gradient(to_bottom,_#FFFFFF_30%,_#E0F2FF_100%)] flex flex-col gap-8 items-center justify-center">
          <div className="bg-white shadow-2xl size-28 md:size-32 xl:size-40 flex flex-col items-center justify-center rounded-full border-2 border-primary">
            <img
              src={logo}
              alt="Fastmet Logo"
              className="size-12 md:size-14 object-contain xl:size-16"
            />
            <p className="font-semibold md:text-lg xl:text-2xl">FastMet</p>
          </div>
          <p className="text-justify indent-5 md:text-lg lg:px-10 xl:px-20">
            Welcome to FastMet the ride-hailing application built for life in
            motion. In the dynamic, fast-paced environment of the modern city,
            time is your most valuable asset. We launched{" "}
            <span className="font-semibold">FastMet</span> in{" "}
            <span className="font-semibold">Metro Manila</span> with a single,
            driving goal: to deliver the quickest, most reliable, and
            technologically advanced transit solution available.
          </p>
        </div>
      </section>
    </div>
  );
}
