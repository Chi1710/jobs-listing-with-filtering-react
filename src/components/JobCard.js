import React from 'react'
import "./JobCard.css"
import { useContext } from 'react'
import { FilterContext } from '../components/createContext';

const JobCard = ( {job} ) => {
const { filters, addFilter, removeFilter } = useContext(FilterContext)

const handleClick = (filter) => {
  if (filters.includes(filter)) {
    removeFilter(filter)
  } else {
    addFilter(filter)
  }
}
  return (
    <div className="job-card">
      <img className="logo" src={job.logo} alt={job.company} />
      <div className="container-div">
        <div className="job-details">
          <div className="job-company">
            <h3 className="company-name">{job.company}</h3>
            {job.new && <h3 className="new label">NEW!</h3>}
            {job.featured && <h3 className="featured label">FEATURED</h3>}
          </div>
          <h1 className="job-position">{job.position}</h1>
          <ul className="job-conditions">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
          <div className="horizontal-line"></div>
        </div>
        <div className="filter-tags">
          <button
            className={`filter-tag ${
              filters.includes(job.role) ? 'active' : ''
            }`}
            onClick={() => handleClick(job.role)}
          >
            {job.role}
          </button>
          <button
            className={`filter-tag ${
              filters.includes(job.level) ? 'active' : ''
            }`}
            onClick={() => handleClick(job.level)}
          >
            {job.level}
          </button>
          {job.languages.map((language) => (
            <button
              className={`filter-tag ${
                filters.includes(language) ? 'active' : ''
              }`}
              onClick={() => handleClick(language)}
              key={language}
            >
              {language}
            </button>
          ))}
          {job.tools &&
            job.tools.map((tool) => (
              <button
                className={`filter-tag ${
                  filters.includes(tool) ? 'active' : ''
                }`}
                onClick={() => handleClick(tool)}
                key={tool}
              >
                {tool}
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default JobCard;