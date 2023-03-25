import React, {useState, useEffect} from 'react'
import "./Jobs.css"
import JobCard from './JobCard'
import axios from "axios";



const Jobs = () => {
  const[isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect( () => {
    axios
    .get("data.json")
    .then(result => {
      setJobs(result.data)
      setIsLoading(false)
    }).catch(error => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if(isLoading){
    return <h2> Loading... </h2>
  }
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <>
    <h1>Jobs</h1>
    {jobs.map( (job) => (
      <JobCard key={job.id}
                job={job} 
      />
    ))}

    </>
  )
}

export default Jobs