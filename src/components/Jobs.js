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
//-- Take filters array from the Context created.
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

//-- Create new Array that filters the jobs. For each job, creates an array (jobTags) with the tags of that job, and then returns all the elements in the filters array that has the filter
const filteredJobs = jobs.filter((job) => {
  const jobTags = [
    job.role,
    job.level,
    ...job.languages,
    ...(job.tools || []),
  ]
  return filters.length === 0 || filters.every((filter) => jobTags.includes(filter));
});

  return (
    <>
      <header className="header">
        <FilterTags />
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
