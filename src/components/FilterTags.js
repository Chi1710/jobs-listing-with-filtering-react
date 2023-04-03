import React from 'react';
import { FilterContext } from './createContext';
import { useContext } from 'react';
const FilterTags = () => {
  const { filters, removeFilter } = useContext(FilterContext)
  return (
    <div className="filter-tags-container">
      {filters.map((filter) => (
        <div className="filter-tag" key={filter}>
          {filter}
        </div>
      ))}
    </div>
  )
}

export default FilterTags
