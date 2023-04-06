import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex justify-center items-center mt-[10%]'>
       <button className='border-solid border-[4px] border-[red]'><Link to='/main'>Go to Main</Link></button>
    </div>
  )
}

export default Home
