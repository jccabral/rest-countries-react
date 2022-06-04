import { createContext, useState } from "react"

export const CountryContext = createContext(null)

export default function CountryProvider({ children }) {
  const [region, setRegion] = useState(null)
  const [currentSearch, setCurrentSearch] = useState(null)

  const filterByRegion = region => setRegion(region)
  const filterSearch = value => setCurrentSearch(value)

  return (
    <CountryContext.Provider value={{ region, currentSearch, filterByRegion, filterSearch }}>
      {children}
    </CountryContext.Provider>
  )
}