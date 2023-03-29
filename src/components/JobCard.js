import React from 'react'
import "./JobCard.css"

const JobCard = ( {job} ) => {

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
          <button className="filter-tag" type="button">
            {job.role}
          </button>
          <button className="filter-tag" type="button">
            {job.level}
          </button>
          {job.languages.map((language, index) => (
            <button className="filter-tag" type="button">
              {language}
            </button>
          ))}
          {job.tools &&
            job.tools.map((tool, index) => (
              <button className="filter-tag" type="button">
                {tool}
              </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default JobCard