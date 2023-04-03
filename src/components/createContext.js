import { createContext } from 'react'

export const FilterContext = createContext({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
})
