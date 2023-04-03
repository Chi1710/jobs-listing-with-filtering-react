import React from 'react';
import { FilterContext } from './createContext';
import { useContext } from 'react';
import './FilterTags.css';
import { IoClose } from 'react-icons/io5'
const FilterTags = () => {
  const { filters, removeFilter } = useContext(FilterContext)
  return (
    <div className="filter-tags-container">
      {filters.map((filter) => (
        <div className="filtered-tag" key={filter}>
          <p className="filtered">{filter}</p>
          <span className="close">
            <IoClose />
          </span>
        </div>
      ))}
    </div>
  )
}

export default FilterTags
