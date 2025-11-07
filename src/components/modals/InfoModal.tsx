import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motor, sedan, pickup, suv, question } from "@/constants/images";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function InfoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer p-2.5 border-2 border-primary bg-white rounded-full hover:bg-primary hover:scale-110 transition-all duration-200 flex items-center justify-center">
          <img src={question} alt="question" className="size-5 sm:size-6" />
        </Button>
      </DialogTrigger>

      <DialogContent className="py-10 lg:max-w-[80vw] xl:max-w-[60vw] [&>button]:lg:scale-150 lg:gap-8">
        <DialogHeader>
          <DialogTitle className="text-xl text-center xl:text-4xl md:text-2xl text-primary font-bold">
            Heads Up Metro Manila!
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-2 lg:gap-5 items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 md:size-24 xl:size-28 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF] border border-primary">
              <img
                src={motor}
                alt="Motorcycle"
                className="size-8 md:size-14 drop-shadow-md object-contain xl:scale-125"
              />
            </div>
            <p className="font-semibold md:text-sm text-xs">Motorcycle</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 md:size-24 xl:size-28 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF] border border-primary">
              <img
                src={sedan}
                alt="Sedan"
                className="size-10 md:size-16 drop-shadow-md object-contain xl:scale-125"
              />
            </div>
            <p className="font-semibold text-xs md:text-sm">Sedan</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 md:size-24 xl:size-28 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF] border border-primary">
              <img
                src={pickup}
                alt="Pickup Truck"
                className="size-10 md:size-16 drop-shadow-md object-contain xl:scale-125"
              />
            </div>
            <p className="font-semibold text-xs md:text-sm">Pickup</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 md:size-24 xl:size-28 rounded-xl flex items-center justify-center bg-gradient-to-b from-[#E5FCFF] to-[#D9F3FF] border border-primary">
              <img
                src={suv}
                alt="MPV/SUV"
                className="size-10 md:size-16 drop-shadow-md object-contain xl:scale-125"
              />
            </div>
            <p className="font-semibold text-xs md:text-sm">MPV/SUV</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-5 lg:w-2/3 mx-auto xl:gap-8 xl:w-[60%]">
          <DialogDescription className="text-sm xl:text-lg md:text-base text-center font-bold">
            Are you an owner-driver with a commitment to safety and a reliable
            vehicle? We want you!
          </DialogDescription>
          <p className="text-xs xl:text-base md:text-sm text-justify">
            We're gearing up to launch a brand-new hailing rider app and are
            actively seeking qualified drivers for our pre-registration phase.
            By signing up now, you'll be one of the first to be approved and
            ready to earn once we go live.
          </p>
          <div className="flex flex-col items-center justify-center gap-1 md:gap-2">
            <p className="text-sm md:text-base font-medium lg:font-bold lg:text-lg">
              Click Here
            </p>
            <Play className="size-5 fill-primary rotate-90 lg:size-6" />
            <DialogClose asChild>
              <Link
                to="/register"
                className="border border-primary xl:text-lg text-primary bg-white cursor-pointer hover:bg-primary hover:text-white px-5 py-2 text-sm lg:text-base rounded-full font-medium transition inline-block"
              >
                Driver's Pre-Registration
              </Link>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
