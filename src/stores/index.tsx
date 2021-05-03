import { createContext, useContext } from 'react'

import { useRoot } from './root'

interface IStores {
  locationStore: ReturnType<typeof useRoot>
}

const storesContext = createContext<IStores | null>(null)

interface StoresProps {
  children: React.ReactElement
}

export function StoresProvider({ children }: StoresProps) {
  const stores = {
    locationStore: useRoot(),
  }

  return <storesContext.Provider value={stores}>{children}</storesContext.Provider>
}
export function useStore() {
  return useContext(storesContext)!
}
