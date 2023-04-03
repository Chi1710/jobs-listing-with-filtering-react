import React, { useState, useEffect } from 'react'
import './Jobs.css'
import JobCard from './JobCard'
import axios from 'axios'
import FilterTags from './FilterTags'

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState('')
  const [filters, setFilters] = useState([])

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
    if (filters.includes(tag)) {
      setFilters(filters.filter((filter) => filter !== tag))
    } else {
      setFilters([...filters, tag])
    }
  }

  const filteredJobs = jobs.filter((job) => {
    const jobTags = [
      job.role,
      job.level,
      ...job.languages,
      ...(job.tools || []),
    ]
    return filters.length === 0 || jobTags.some((tag) => filters.includes(tag))
  })

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
