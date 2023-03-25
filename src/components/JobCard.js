import React from 'react'
import "./JobCard.css"

const JobCard = ( {job} ) => {

  return (
    <div>
    <div className='logo'>
    <img src={job.logo} alt={job.company} />
    </div>

    <div>
    <h3>{job.company}</h3>
    <h3>{job.new ? "NEW!" : ""}</h3>
    <h3>{job.featured ? "FEATURED" : ""}</h3> 
    <h1>{job.position}</h1>
    <h3>{job.postedAt}</h3>
    <h3>{job.contract}</h3>
    <h3>{job.location}</h3>
    </div>


    </div>
  )
}

export default JobCard