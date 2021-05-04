import { createContext, useContext } from "react";

import { useSwapi } from "./swapiStore";

interface Stores {
  swapi: ReturnType<typeof useSwapi>;
}

const storesContext = createContext<Stores | null>(null);

interface StoresProps {
  children: React.ReactElement;
}

export function StoresProvider({ children }: StoresProps) {
  const stores = {
    swapi: useSwapi(),
  };

  return (
    <storesContext.Provider value={stores}>{children}</storesContext.Provider>
  );
}
export function useStore() {
  return useContext(storesContext)!;
}
