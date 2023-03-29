import React from 'react'
import "./JobCard.css"

const JobCard = ( {job} ) => {

  return (
    <div className="job-card">
        <img className="logo" src={job.logo} alt={job.company} />
     

      <div className="job-details">
        <div className="job-company">
          <h3 className='company-name'>{job.company}</h3>
          {job.new && (
             <h3 className='new label'>NEW!</h3>   )}
             {job.featured && (
              <h3 className='featured label'>FEATURED</h3>
             )}
        </div>
        <h1 className='job-position'>{job.position}</h1>
        <ul className="job-conditions">
          <li>{job.postedAt}</li>
          <li>{job.contract}</li>
          <li>{job.location}</li>
        </ul>
        <div className='horizontal-line'></div>
        <div className='filter'>filters here</div>
      </div>
    </div>
  )
}

export default JobCard