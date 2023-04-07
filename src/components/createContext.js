import { createContext } from 'react'
//-- Create context for the filtering (here we can add remove and clear filters)
export const FilterContext = createContext({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {}
})
