import React from 'react';
import Jobs from './components/Jobs';

import Footer from './components/Footer';
import { useState } from 'react'
import { FilterContext } from './components/createContext'

function App() {
  const [filters, setFilters] = useState([])

  const addFilter = (filter) => {
    setFilters([...filters, filter])
  }

  const removeFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  return (
    <FilterContext.Provider value={{ filters, addFilter, removeFilter }}>
     <Jobs />
    </FilterContext.Provider>
  )
}

export default App

