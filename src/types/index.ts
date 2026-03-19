// ── Vehicles ─────────────────────────────────────────────────────────────

export interface ILoadVariant {
  _id: string;
  maxLoadKg: number;
  isActive: boolean;
}

export interface IVehicleType {
  _id: string;
  name: string;
  imageUrl: string;
  variants: ILoadVariant[];
}

// ── Registration counts ───────────────────────────────────────────────────

export interface RegistrationCounts {
  drivers: number;
  users: number;
}

// ── Reward tiers ─────────────────────────────────────────────────────────

export interface IReward {
  text: string;
  vehicle: "all" | "2-wheel" | "4-6-wheel";
}

export interface IRewardTier {
  _id: string;
  type: "driver" | "user";
  level: number;
  label: string;
  min: number;
  max: number;
  rewards: IReward[];
}

// ── Raffle prizes ─────────────────────────────────────────────────────────

export interface IRafflePerk {
  label: string;
  value: string;
}

export interface IRafflePrize {
  _id: string;
  rank: string;
  order: number;
  winners: number;
  isActive: boolean;
  perks: IRafflePerk[];
}
