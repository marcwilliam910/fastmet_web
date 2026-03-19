import { useQuery } from "@tanstack/react-query";
import type {
  RegistrationCounts,
  IVehicleType,
  IRewardTier,
  IRafflePrize,
} from "../types";

const API_URL = import.meta.env.VITE_API_URL;

// ── Registration counts ───────────────────────────────────────────────────

const fetchRegistrationCounts = async (): Promise<RegistrationCounts> => {
  const res = await fetch(`${API_URL}/api/register/counts`);
  if (!res.ok) throw new Error("Failed to fetch registration counts");
  return res.json();
};

export const useRegistrationCounts = () =>
  useQuery({
    queryKey: ["registrationCounts"],
    queryFn: fetchRegistrationCounts,
    staleTime: Infinity,
  });

// ── Vehicles ─────────────────────────────────────────────────────────────

const fetchVehicles = async (): Promise<IVehicleType[]> => {
  const res = await fetch(`${API_URL}/api/vehicles`);
  if (!res.ok) throw new Error("Failed to fetch vehicles");
  return res.json();
};

export const useVehicles = () =>
  useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
    staleTime: Infinity,
  });

// ── Reward tiers ─────────────────────────────────────────────────────────

const fetchRewardTiers = async (
  type: "driver" | "user",
): Promise<IRewardTier[]> => {
  const res = await fetch(`${API_URL}/api/rewards/tiers?type=${type}`);
  if (!res.ok) throw new Error("Failed to fetch reward tiers");
  const data = await res.json();
  return data.data;
};

export const useRewardTiers = (type: "driver" | "user") =>
  useQuery({
    queryKey: ["rewardTiers", type],
    queryFn: () => fetchRewardTiers(type),
    staleTime: Infinity,
  });

// ── Raffle prizes ─────────────────────────────────────────────────────────

const fetchRafflePrizes = async (): Promise<IRafflePrize[]> => {
  const res = await fetch(`${API_URL}/api/rewards/raffle`);
  if (!res.ok) throw new Error("Failed to fetch raffle prizes");
  const data = await res.json();
  return data.data;
};

export const useRafflePrizes = () =>
  useQuery({
    queryKey: ["rafflePrizes"],
    queryFn: fetchRafflePrizes,
    staleTime: Infinity,
  });
