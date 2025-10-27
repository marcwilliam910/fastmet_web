import Footer from "@/components/home/Footer";
import Info from "@/components/home/Info";
import Phone from "@/components/home/Phone";
import InfoModal from "@/components/InfoModal";
import {
  logo,
  motor,
  phone_map,
  phoneBG,
  sedan,
  single_phone,
} from "@/constants/images";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

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
      <div className="space-y-5 md:space-y-10 py-10">
        <section className="p-4 lg:px-20 xl:px-40">
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
        {/* heads up drivers */}
        <section className="flex xl:mx-40 flex-col md:flex-row items-center xl:px-20 xl:gap-16 gap-10 py-10 px-6 xl:py-16 md:mx-4 lg:mx-20 bg-gradient-to-br from-white to-[#FFF6ED] overflow-hidden">
          {/* Left Side - Mockup */}
          <div
            className="lg:size-72 size-56 md:size-64 flex justify-center relative items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${phoneBG})` }}
          >
            <div className="absolute bg-gradient-to-b from-[#FFD07F] to-primary rounded-full blur-2xl size-64 md:size-80 opacity-40" />

            <img
              src={single_phone}
              alt="Phone Mockup"
              className="size-60 scale-125 lg:scale-150 object-contain"
            />
            <img
              src={motor}
              alt="Motorcycle"
              className="size-24 lg:size-28 object-contain absolute -bottom-5 -right-5 z-10"
            />
          </div>
          {/* Right Side - Text Content */}
          <div className="flex-1 flex flex-col gap-5 text-center md:text-left md:px-4 xl:gap-8">
            <h2 className="text-primary font-bold text-2xl md:text-3xl uppercase">
              Heads Up Drivers!
            </h2>

            <p className="text-gray-700 text-justify indent-5 md:text-lg leading-relaxed">
              We’re gearing up to launch a brand-new hailing rider app and are
              actively seeking qualified drivers for our pre-registration phase.
              By signing up now, you'll be one of the first to be approved and
              ready to earn once we go live.
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-3 md:gap-2">
              <span className="font-semibold hidden md:block text-sm lg:text-base xl:text-lg">
                Click Here
              </span>

              <div className="hidden md:flex flex-row items-center">
                <Play className="size-4 fill-primary lg:size-5 xl:size-6" />
                <Play className="size-4 fill-primary lg:size-5 xl:size-6" />
              </div>

              <Link
                to="/register"
                className="border border-primary xl:text-lg text-primary bg-white cursor-pointer hover:bg-primary hover:text-white px-5 py-2 text-sm lg:text-base rounded-full font-medium transition inline-block"
              >
                Driver's Pre-Registration
              </Link>

              <InfoModal />
            </div>
          </div>
        </section>

        {/* get ready */}
        <section className="flex xl:mx-40 flex-col items-center xl:px-20 xl:gap-16 gap-10 py-10 px-6 xl:py-16 md:mx-4 lg:mx-20 bg-gradient-to-bl from-white to-[#FFF6ED] overflow-hidden md:flex-row-reverse">
          {/* Left Side - Mockup */}
          <div
            className="lg:size-72 size-56 md:size-64 flex justify-center relative items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${phoneBG})` }}
          >
            <div className="absolute bg-gradient-to-b from-[#FFD07F] to-primary rounded-full blur-2xl size-64 md:size-80 opacity-40" />

            <img
              src={phone_map}
              alt="Phone Mockup"
              className="size-60 scale-125 lg:scale-150 object-contain"
            />
            <img
              src={sedan}
              alt="Sedan"
              className="size-24 md:size-32 scale-125 object-contain absolute -bottom-5 -right-5 z-10"
            />
          </div>
          {/* Right Side - Text Content */}
          <div className="flex-1 flex flex-col gap-5 text-center md:text-left md:px-4 xl:gap-8">
            <h2 className="text-primary font-bold text-2xl md:text-3xl uppercase">
              Get Ready!
            </h2>

            <p className="text-gray-700 text-justify indent-5 md:text-lg leading-relaxed">
              Our new hailing rider app is launching soon, and we're looking for
              the best drivers to pre-register now! Get your application in
              early and be ready to drive the moment we launch.
            </p>

            <div className="flex justify-center lg:justify-start items-center gap-3 md:gap-2">
              <span className="font-semibold hidden md:block text-sm lg:text-base xl:text-lg">
                Click Here
              </span>

              <div className="hidden md:flex flex-row items-center">
                <Play className="size-4 fill-primary lg:size-5 xl:size-6" />
                <Play className="size-4 fill-primary lg:size-5 xl:size-6" />
              </div>

              <Link
                to="/register"
                className="border border-primary xl:text-lg text-primary bg-white cursor-pointer hover:bg-primary hover:text-white px-5 py-2 text-sm lg:text-base rounded-full font-medium transition inline-block"
              >
                Driver's Pre-Registration
              </Link>
              <InfoModal />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
