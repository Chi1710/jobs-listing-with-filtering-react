import React, { useState, useEffect, useContext } from 'react'
import './Jobs.css'
import JobCard from './JobCard'
import axios from 'axios'
import { FilterContext } from '../components/createContext'

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

  if (isLoading) {
    return <h2> Loading... </h2>
  }
  if (error) {
    return <h2>{error}</h2>
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
      <header className="header"></header>
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
