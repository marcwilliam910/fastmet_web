import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const API_URL = import.meta.env.VITE_API_URL;

interface ILoadVariant {
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

interface Vehicles {
  vehicles: IVehicleType[];
  setVehicles: React.Dispatch<React.SetStateAction<IVehicleType[]>>;
  loading: boolean;
}

const VehiclesContext = createContext<Vehicles | undefined>(undefined);

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [vehicles, setVehicles] = useState<IVehicleType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVehicles = useCallback(async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        fields: "_id,name,key,variants,imageUrl",
        includeInactive: "false",
      });

      const res = await fetch(`${API_URL}/api/vehicles?${params.toString()}`);
      const data = await res.json();
      const list: IVehicleType[] = Array.isArray(data)
        ? data
        : (data.data ?? []);
      setVehicles(list);
    } catch (err) {
      console.error("Failed to fetch vehicles:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (vehicles.length === 0) {
      fetchVehicles();
    }
  }, [fetchVehicles, vehicles.length]);

  return (
    <VehiclesContext.Provider value={{ vehicles, setVehicles, loading }}>
      {children}
    </VehiclesContext.Provider>
  );
}

//vite fast refresh warning - It means during development, when you edit that file, the entire module reloads instead of just the changed component, which can cause state to reset unexpectedly.

// eslint-disable-next-line react-refresh/only-export-components
export function useVehiclesContext() {
  const context = useContext(VehiclesContext);
  if (!context) {
    throw new Error(
      "useVehiclesContext must be used within a <VehiclesProvider />",
    );
  }
  return context;
}
