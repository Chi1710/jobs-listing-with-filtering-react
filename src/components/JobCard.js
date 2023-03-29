import React from 'react'
import "./JobCard.css"

const JobCard = ( {job} ) => {

  return (
    <div className="job-card">
      <div className="logo">
        <img src={job.logo} alt={job.company} />
      </div>

      <div className="job-details">
        <div className="job-company">
          <h3 className='company-name'>{job.company}</h3>
          <h3 className='new label'>{job.new ? 'NEW!' : ''}</h3>
          <h3 className='featured label'>{job.featured ? 'FEATURED' : ''}</h3>
        </div>
        <h1 className='job-position'>{job.position}</h1>
        <div className="job-conditions">
          <h3>{job.postedAt}</h3>
          <h3>{job.contract}</h3>
          <h3>{job.location}</h3>
        </div>
        <div className='line'></div>
        <div className='filter'>filters here</div>
      </div>
    </div>
  )
}

export default JobCard