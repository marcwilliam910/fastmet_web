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
