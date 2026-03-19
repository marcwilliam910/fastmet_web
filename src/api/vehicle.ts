import { API_URL } from "@/helper/constant";
import type { IVehicleType } from "@/types/vehicle";

export const fetchVehicles = async (): Promise<IVehicleType[]> => {
  const res = await fetch(`${API_URL}/api/vehicles`);
  if (!res.ok) throw new Error("Failed to fetch vehicles");
  return res.json();
};
