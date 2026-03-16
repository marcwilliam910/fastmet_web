import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface RegistrationCounts {
  driverCount: number;
  userCount: number;
  loading: boolean;
  refetch: () => Promise<void>;
}

const RegistrationCountContext = createContext<RegistrationCounts | undefined>(
  undefined,
);

export function RegistrationCountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [driverCount, setDriverCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // ← extract outside useEffect so refresh can call it too
  const fetchCounts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/register/counts`);
      const data = await res.json();
      setDriverCount(data.drivers);
      setUserCount(data.users);
    } catch (err) {
      console.error("Failed to fetch counts:", err);
    } finally {
      setLoading(false);
    }
  }, []); // ← stable reference

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  return (
    <RegistrationCountContext.Provider
      value={{ driverCount, userCount, loading, refetch: fetchCounts }}
    >
      {children}
    </RegistrationCountContext.Provider>
  );
}

//vite fast refresh warning - It means during development, when you edit that file, the entire module reloads instead of just the changed component, which can cause state to reset unexpectedly.

// eslint-disable-next-line react-refresh/only-export-components
export function useRegistrationCountContext() {
  const context = useContext(RegistrationCountContext);
  if (!context) {
    throw new Error(
      "useRegistrationCountContext must be used within a <RegistrationCountProvider />",
    );
  }
  return context;
}
