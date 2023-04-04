import React, { useState, useEffect, useContext } from 'react'
import './Jobs.css'
import JobCard from './JobCard'
import axios from 'axios'
import FilterTags from './FilterTags'
import { FilterContext } from './createContext'

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState('')

  const { filters } = useContext(FilterContext)

  useEffect(() => {
    axios
      .get('data.json')
      .then((result) => {
        setJobs(result.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  const handleFilter = (tag) => {
  }


const filteredJobs = jobs.filter((job) => {
  const jobTags = [
    job.role,
    job.level,
    ...job.languages,
    ...(job.tools || []),
  ];
  return filters.length === 0 || filters.every((filter) => jobTags.includes(filter));
});


  return (
    <>
      <header className="header">
        <FilterTags filters={filters} handleFilter={handleFilter} />
      </header>
      <div className="jobs-container">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </>
  )
}

export default Jobs
