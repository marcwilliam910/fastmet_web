import { fetchRafflePrizes, fetchRewardTiers } from "@/api/reward";
import { useQuery } from "@tanstack/react-query";

export const useRewardTiers = (type: "driver" | "user") =>
  useQuery({
    queryKey: ["rewardTiers", type],
    queryFn: () => fetchRewardTiers(type),
  });

export const useRafflePrizes = () =>
  useQuery({
    queryKey: ["rafflePrizes"],
    queryFn: fetchRafflePrizes,
  });
