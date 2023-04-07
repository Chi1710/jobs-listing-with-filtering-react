import React from 'react';
import Jobs from './components/Jobs';
import { useState } from 'react'
import { FilterContext } from './components/createContext'

function App() {
  const [filters, setFilters] = useState([])

 const addFilter = (filter) => {
   if (!filters.includes(filter)) {
     setFilters([...filters, filter])
   }
 }
const removeFilter = (filter) => {
  setFilters(filters.filter(filters => filters !== filter))
} 

  return (
    <FilterContext.Provider value={{ filters, addFilter, removeFilter}}>
     <Jobs />
    </FilterContext.Provider>
  )
}

export default App

