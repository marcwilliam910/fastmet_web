import { fetchRegistrationCounts } from "@/api/registration";
import { useQuery } from "@tanstack/react-query";

export const useRegistrationCounts = () =>
  useQuery({
    queryKey: ["registrationCounts"],
    queryFn: fetchRegistrationCounts,
    staleTime: Infinity, //can be changed
  });
