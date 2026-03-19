import { API_URL } from "@/helper/constant";
import type { RegistrationCounts } from "@/types/registration";

export const fetchRegistrationCounts =
  async (): Promise<RegistrationCounts> => {
    const res = await fetch(`${API_URL}/api/register/counts`);
    if (!res.ok) throw new Error("Failed to fetch registration counts");
    return res.json();
  };
