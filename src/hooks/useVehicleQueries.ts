import { fetchVehicles } from "@/api/vehicle";
import { useQuery } from "@tanstack/react-query";

export const useVehicles = () =>
  useQuery({
    queryKey: ["vehicles"],
    queryFn: fetchVehicles,
  });
