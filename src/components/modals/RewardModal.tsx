import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import gift from "@/assets/gift.png";
import {box, reward_bg, reward} from "@/constants/images";

export default function RewardModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center flex-col lg:relative -top-4">
          <button className="cursor-pointer rounded-full border-t border-orange-500">
            <img
              src={gift}
              className="size-12 object-contain xl:size-14 hover:scale-110 transition-all duration-200"
            />
          </button>
          <p
            className="hidden lg:block text-white text-xs xl:text-sm font-bold"
            style={{
              textShadow:
                "0 1px 0 rgba(0,0,0,0.85), 0 -1px 0 rgba(0,0,0,0.85), 1px 0 0 rgba(0,0,0,0.85), -1px 0 0 rgba(0,0,0,0.85), 0 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            Pre-Registered Rewards
          </p>
        </div>
      </DialogTrigger>

      <DialogContent
        className="py-10 md:max-w-[90vw] md:bg-center z-[9999] xl:max-w-[60vw] [&>button]:lg:scale-150 lg:gap-4 gap-0 bg-orange-200 border-none"
        style={{
          backgroundImage: `url(${reward_bg})`,
          backgroundSize:
            "cover" /* Ensures the image covers the entire area, cropping if necessary */,
          backgroundRepeat: "no-repeat" /* Prevents the image from repeating */,
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-xl text-center xl:text-4xl md:text-2xl text-white font-bold">
            <span
              style={{
                textShadow:
                  "0 1px 0 rgba(0,0,0,0.85), 0 -1px 0 rgba(0,0,0,0.85), 1px 0 0 rgba(0,0,0,0.85), -1px 0 0 rgba(0,0,0,0.85), 0 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              Pre-Registered Reward
            </span>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 lg:gap-8 mt-4">
          {/* Driver’s Reward Section */}
          <div className="bg-white/90 rounded-lg  p-4 shadow-md flex flex-col md:flex-row gap-3 border-2 border-orange-300">
            <div className="flex items-center gap-2 flex-col ">
              <div className="bg-orange-400 text-white text-sm font-semibold px-3 py-1 rounded">
                Driver's Reward
              </div>
              <img
                src={reward}
                alt="Gift"
                className="lg:size-40 object-contain hidden md:block size-30"
              />
            </div>

            <div className="flex flow-row justify-center items-center flex-wrap md:flex-nowrap flex-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={box}
                  alt="Reward Slot"
                  className=" object-contain size-20 md:size-24 lg:size-36"
                />
              ))}
            </div>
          </div>

          {/* User’s Reward Section */}
          <div className="bg-white/90 rounded-lg  p-4 shadow-md flex flex-col md:flex-row gap-3 border-2 border-orange-300">
            <div className="flex items-center gap-2 flex-col ">
              <div className="bg-orange-400 text-white text-sm font-semibold px-3 py-1 rounded">
                User's Reward
              </div>
              <img
                src={reward}
                alt="Gift"
                className="lg:size-40 object-contain hidden md:block size-30"
              />
            </div>

            <div className="flex flow-row justify-center items-center flex-wrap md:flex-nowrap flex-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={box}
                  alt="Reward Slot"
                  className=" object-contain size-20 md:size-24 lg:size-36"
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
