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
