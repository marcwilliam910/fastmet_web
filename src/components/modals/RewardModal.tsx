import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import gift from "@/assets/gift.png";
import { box, reward_bg, reward } from "@/constants/images";

export default function RewardModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer ">
          <img src={gift} className="size-12 " />
        </Button>
      </DialogTrigger>

      <DialogContent
        className="py-10 lg:max-w-[80vw] xl:max-w-[60vw] [&>button]:lg:scale-150 lg:gap-8 bg-orange-200 border-none"
        style={{
          backgroundImage: `url(${reward_bg})`,
          backgroundSize:
            "cover" /* Ensures the image covers the entire area, cropping if necessary */,
          backgroundRepeat: "no-repeat" /* Prevents the image from repeating */,
          backgroundPosition:
            "center" /* Centers the image horizontally and vertically */,
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl text-center xl:text-4xl md:text-2xl text-white font-bold">
            Pre-Registered Reward
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8 mt-6">
          {/* Driver’s Reward Section */}
          <div className="bg-white/90 rounded-lg  p-4 shadow-md flex flex-row border-2 border-orange-300">
            <div className="flex items-center gap-2 flex-col ">
              <div className="bg-orange-400 text-white text-sm font-semibold px-3 py-1 rounded">
                Driver's Reward
              </div>
              <img src={reward} alt="Gift" />
            </div>

            <div className="flex flow-row justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={box}
                  alt="Reward Slot"
                  className=" object-contain size-50"
                />
              ))}
            </div>
          </div>

          {/* User’s Reward Section */}
          <div className="bg-white/90 rounded-lg p-4 shadow-md border border-orange-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-400 text-white text-sm font-semibold px-3 py-1 rounded">
                User's Reward
              </div>
            </div>

            <div className="flex flow-row justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={box}
                  alt="Reward Slot"
                  className=" object-contain size-50"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
