import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gift_open, gift_close, reward_bg } from "@/constants/images";
import { CheckCheck, Loader2, Lock } from "lucide-react";
import { useRegistrationCountContext } from "@/context/RegisteredCountProvider";

interface Reward {
  text: string;
  vehicle: "2-wheel" | "4-6-wheel" | "all";
}

interface Level {
  level: number;
  label: string;
  min: number;
  max: number;
  rewards: Reward[];
}

const DRIVER_LEVELS: Level[] = [
  {
    level: 1,
    label: "First 50 Drivers",
    min: 1,
    max: 50,
    rewards: [
      { text: "₱1,000 bonus after your first trip", vehicle: "all" },
      { text: "Founding Driver Badge", vehicle: "all" },
      { text: "Branded Thermal Bag & Long Sleeve", vehicle: "2-wheel" },
      { text: "Branded Polo Shirt, Cap & Key Holder", vehicle: "4-6-wheel" },
    ],
  },
  {
    level: 2,
    label: "Drivers 51–100",
    min: 51,
    max: 100,
    rewards: [
      { text: "₱800 bonus after your first trip", vehicle: "all" },
      { text: "Founding Driver Badge", vehicle: "all" },
      { text: "Branded Long Sleeve", vehicle: "2-wheel" },
      { text: "Branded Polo Shirt", vehicle: "4-6-wheel" },
    ],
  },
  {
    level: 3,
    label: "Drivers 101–200",
    min: 101,
    max: 200,
    rewards: [
      { text: "₱500 bonus after your first trip", vehicle: "all" },
      { text: "Founding Driver Badge", vehicle: "all" },
      { text: "Branded Long Sleeve", vehicle: "2-wheel" },
      { text: "Branded Polo Shirt", vehicle: "4-6-wheel" },
    ],
  },
  {
    level: 4,
    label: "Drivers 201–300",
    min: 201,
    max: 300,
    rewards: [
      { text: "₱300 bonus after your first trip", vehicle: "all" },
      { text: "Founding Driver Badge", vehicle: "all" },
      { text: "Branded Long Sleeve", vehicle: "2-wheel" },
      { text: "Branded Polo Shirt", vehicle: "4-6-wheel" },
    ],
  },
  {
    level: 5,
    label: "Drivers 301–500",
    min: 301,
    max: 500,
    rewards: [
      { text: "₱200 bonus after your first trip", vehicle: "all" },
      { text: "Founding Driver Badge", vehicle: "all" },
      { text: "Branded Long Sleeve", vehicle: "2-wheel" },
      { text: "Branded Polo Shirt", vehicle: "4-6-wheel" },
    ],
  },
];

const USER_LEVELS: Level[] = [
  {
    level: 1,
    label: "First 100 Users",
    min: 1,
    max: 100,
    rewards: [
      { text: "₱500 app credit for your deliveries", vehicle: "all" },
      { text: "Early User Badge", vehicle: "all" },
      { text: "Entry to Launch Raffle — Grand Prize", vehicle: "all" },
    ],
  },
  {
    level: 2,
    label: "Users 101–300",
    min: 101,
    max: 300,
    rewards: [
      { text: "₱200 discount on your first order", vehicle: "all" },
      { text: "Early User Badge", vehicle: "all" },
      { text: "Entry to Launch Raffle", vehicle: "all" },
    ],
  },
  {
    level: 3,
    label: "Users 301–600",
    min: 301,
    max: 600,
    rewards: [
      { text: "₱150 discount on your first order", vehicle: "all" },
      { text: "Early User Badge", vehicle: "all" },
      { text: "Entry to Launch Raffle", vehicle: "all" },
    ],
  },
  {
    level: 4,
    label: "Users 601–800",
    min: 601,
    max: 800,
    rewards: [
      { text: "₱100 discount on your first order", vehicle: "all" },
      { text: "Early User Badge", vehicle: "all" },
    ],
  },
  {
    level: 5,
    label: "Users 801–1000",
    min: 801,
    max: 1000,
    rewards: [
      { text: "₱75 discount on your first order", vehicle: "all" },
      { text: "Early User Badge", vehicle: "all" },
    ],
  },
];

const getCurrentLevelIndex = (count: number, levels: Level[]) => {
  const idx = levels.findIndex((l) => count >= l.min && count <= l.max);
  if (idx !== -1) return idx;
  return count > levels[levels.length - 1].max ? levels.length - 1 : 0;
};

const getLevelProgress = (count: number, level: Level) => {
  if (count < level.min) return 0;
  if (count > level.max) return 100;
  return Math.round(
    ((count - level.min + 1) / (level.max - level.min + 1)) * 100,
  );
};

function RewardPanel({
  levelData,
  count,
  isFilled,
  isCurrent,
}: {
  levelData: Level;
  count: number;
  isFilled: boolean;
  isCurrent: boolean;
}) {
  const progress = getLevelProgress(count, levelData);
  const allRewards = levelData.rewards.filter((r) => r.vehicle === "all");
  const twoWheel = levelData.rewards.filter((r) => r.vehicle === "2-wheel");
  const fourWheel = levelData.rewards.filter((r) => r.vehicle === "4-6-wheel");
  const hasVehicleSplit = twoWheel.length > 0 || fourWheel.length > 0;
  const isUpcoming = !isFilled && !isCurrent;

  return (
    <div className="space-y-4">
      {/* Level header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
            Level {levelData.level}
          </p>
          <p className="text-base font-bold text-gray-800 leading-tight">
            {levelData.label}
          </p>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            isFilled
              ? "bg-green-100 text-green-700"
              : isCurrent
                ? "bg-primary/10 text-primary"
                : "bg-gray-100 text-gray-400"
          }`}
        >
          {isFilled
            ? "✓ Filled"
            : isCurrent
              ? `${count} / ${levelData.max}`
              : `${levelData.max - levelData.min + 1} slots`}
        </span>
      </div>

      {/* Progress bar — filled & current only */}
      {(isCurrent || isFilled) && (
        <div className="space-y-1">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${isFilled ? "bg-green-500" : "bg-primary"}`}
              style={{ width: `${isFilled ? 100 : progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-gray-400">
            <span>{isFilled ? "Level complete" : "Slots being filled"}</span>
            <span>{isFilled ? "100%" : `${progress}%`}</span>
          </div>
        </div>
      )}

      {/* Upcoming state message */}
      {isUpcoming && (
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <Lock className="size-3.5 text-gray-400 shrink-0" />
          <p className="text-xs text-gray-400">
            This level unlocks after Level {levelData.level - 1} is filled
          </p>
        </div>
      )}

      {/* Rewards */}
      <div className="space-y-3">
        {/* Shared rewards */}
        {allRewards.length > 0 && (
          <div className="space-y-2">
            {allRewards.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 shrink-0 size-4 rounded-full flex items-center justify-center text-[10px] font-bold ${isFilled ? "bg-green-500 text-white" : isCurrent ? "bg-primary text-white" : "bg-gray-200 text-gray-400"}`}
                >
                  ✓
                </span>
                <p
                  className={`text-sm leading-snug ${isUpcoming ? "text-gray-400" : "text-gray-700"}`}
                >
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Vehicle-specific — two boxed columns */}
        {hasVehicleSplit && (
          <div className="grid grid-cols-2 gap-3">
            {/* 2-wheel */}
            <div
              className={`rounded-xl border p-3 space-y-2 ${isUpcoming ? "opacity-40" : ""} bg-sky-50 border-sky-100`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-lg leading-none">🏍️</span>
                <div>
                  <p className="text-[11px] font-bold text-sky-700 leading-tight">
                    2-Wheel
                  </p>
                  <p className="text-[9px] text-sky-500 leading-tight">
                    Motorcycle
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-sky-100" />
              <ul className="space-y-1.5">
                {twoWheel.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-sky-800"
                  >
                    <span className="text-sky-400 shrink-0 mt-0.5 font-bold">
                      +
                    </span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* 4-6 wheel */}
            <div
              className={`rounded-xl border p-3 space-y-2 ${isUpcoming ? "opacity-40" : ""} bg-amber-50 border-amber-100`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-lg leading-none">🚛</span>
                <div>
                  <p className="text-[11px] font-bold text-amber-700 leading-tight">
                    4–6 Wheel
                  </p>
                  <p className="text-[9px] text-amber-500 leading-tight">
                    Sedan, Van & up
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-amber-100" />
              <ul className="space-y-1.5">
                {fourWheel.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-1.5 text-xs text-amber-800"
                  >
                    <span className="text-amber-400 shrink-0 mt-0.5 font-bold">
                      +
                    </span>
                    {r.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RewardTab({
  levels,
  count,
  loading,
}: {
  levels: Level[];
  count: number;
  loading: boolean;
}) {
  const currentLevelIndex = getCurrentLevelIndex(count, levels);
  const [selectedIndex, setSelectedIndex] = useState(currentLevelIndex);

  // Keep selected in sync when count changes
  useEffect(() => {
    setSelectedIndex(currentLevelIndex);
  }, [currentLevelIndex]);

  const selected = levels[selectedIndex];
  const isFilled = count > selected.max;
  const isCurrent = currentLevelIndex === selectedIndex;

  return (
    <div className="space-y-5">
      {/* Summary row */}
      <div className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
        <div>
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
            Registered so far
          </p>
          <p className="text-2xl font-bold text-primary leading-tight">
            {loading ? (
              <Loader2 className="size-5 animate-spin inline" />
            ) : (
              count.toLocaleString()
            )}
          </p>
        </div>
        <div className="h-8 w-px bg-gray-100" />
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
            You are at
          </p>
          <p className="text-sm font-bold text-gray-800">
            Level {levels[currentLevelIndex].level}
          </p>
          <p className="text-[11px] text-gray-400">
            {levels[currentLevelIndex].label}
          </p>
        </div>
      </div>

      {/* Station stepper */}
      <div className="relative flex items-center justify-between px-2">
        {/* Track line behind circles */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-gray-200 rounded-full" />

        {/* Filled portion of track */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full transition-all duration-500"
          style={{
            width: `calc(${(currentLevelIndex / (levels.length - 1)) * 100}% * (100% - 3rem) / 100%)`,
            maxWidth: `calc(100% - 3rem)`,
            // simpler: just use percentage of the track
            right: "auto",
          }}
        />

        {levels.map((level, i) => {
          const filled = count > level.max;
          const current = currentLevelIndex === i;
          const selected_ = selectedIndex === i;

          return (
            <button
              key={level.level}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="relative z-10 flex flex-col items-center gap-1.5 group"
            >
              {/* Circle */}
              <div
                className={`
                  size-9 rounded-full flex items-center justify-center
                  border-2 font-bold text-sm transition-all duration-200
                  ${
                    filled
                      ? "bg-green-500 border-green-500 text-white"
                      : current
                        ? "bg-primary border-primary text-white shadow-md shadow-primary/30"
                        : selected_
                          ? "bg-white border-primary text-primary"
                          : "bg-white border-gray-300 text-gray-400"
                  }
                  ${selected_ ? "scale-110 ring-2 ring-primary/20" : "group-hover:scale-105"}
                `}
              >
                {filled ? <CheckCheck className="size-4" /> : level.level}
              </div>

              {/* Label below */}
              <span
                className={`text-[10px] font-semibold text-center leading-tight max-w-[56px] transition-colors ${
                  selected_ ? "text-primary" : "text-gray-400"
                }`}
              >
                {level.level === 1
                  ? `≤${level.max}`
                  : level.level === levels.length
                    ? `${level.min}+`
                    : `${level.min}–${level.max}`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Reward panel for selected level */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm min-h-[160px]">
        <RewardPanel
          levelData={selected}
          count={count}
          isFilled={isFilled}
          isCurrent={isCurrent}
        />
      </div>
    </div>
  );
}

export default function RewardModal() {
  const [open, setOpen] = useState(false);

  const { driverCount, userCount, loading, refetch } =
    useRegistrationCountContext();

  useEffect(() => {
    if (!open) return;
    refetch();
  }, [open, refetch]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex items-center justify-center gap-1 flex-col fixed bottom-2 right-2 z-[100] cursor-pointer">
          <img
            src={open ? gift_open : gift_close}
            alt="Gift box"
            className={`lg:size-30 size-15 object-contain md:size-20 transition-transform duration-300 ease-in-out ${open ? "scale-110" : ""}`}
          />
          <p
            className="hidden md:block text-white text-xs xl:text-sm font-bold"
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
        className="
          p-0 w-[95vw] max-w-md md:max-w-lg
          z-[9999] border-none overflow-hidden rounded-2xl
          [&>button]:absolute [&>button]:top-3 [&>button]:right-3 [&>button]:z-20
          [&>button]:bg-black/30 [&>button]:hover:bg-black/50
          [&>button]:text-white [&>button]:rounded-full [&>button]:p-1 [&>button]:transition-colors
        "
      >
        <DialogDescription className="sr-only">
          Pre-Registration Rewards
        </DialogDescription>

        {/* Hero header */}
        <div
          className="relative w-full h-24 flex items-center justify-center shrink-0"
          style={{
            backgroundImage: `url(${reward_bg})`,
            backgroundSize: "contain",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/45" />
          <DialogHeader className="relative z-10 text-center px-6">
            <DialogTitle className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
              Pre-Registration Rewards
            </DialogTitle>
            <p className="text-white/75 text-xs mt-0.5">
              Register early · Claim exclusive rewards at launch
            </p>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="bg-gray-50 px-4 pb-6 pt-4">
          <Tabs defaultValue="driver">
            <TabsList className="w-full bg-white border border-gray-200 rounded-lg p-1 mb-5 h-auto">
              <TabsTrigger
                value="driver"
                className="flex-1 text-xs font-semibold py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
              >
                🚗 Driver Rewards
              </TabsTrigger>
              <TabsTrigger
                value="user"
                className="flex-1 text-xs font-semibold py-2 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md transition-all"
              >
                📦 User Rewards
              </TabsTrigger>
            </TabsList>

            <TabsContent value="driver">
              <RewardTab
                levels={DRIVER_LEVELS}
                count={driverCount}
                loading={loading}
              />
            </TabsContent>
            <TabsContent value="user">
              <RewardTab
                levels={USER_LEVELS}
                count={userCount}
                loading={loading}
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
