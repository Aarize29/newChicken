import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex justify-between items-center mt-[10%] m-20'>

     <div className="card cursor-pointer">
            <Link to='/main'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black w-[500px] h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>By Uploading Image</h1></Link>
     </div>
     <div className="card cursor-pointer">
        <Link to='/main'><h1 className='flex justify-center items-center font-bold text-xl rounded-2xl border-[2px] border-solid border-black w-[500px] h-[300px] shadow-xl shadow-black-900 hover:shadow-black'>Direct From Camera</h1></Link>
     </div>
       {/* <button className='border-solid border-[4px] border-[red]'><Link to='/main'>Go to Main</Link></button> */}
    </div>
  )
}

export default Home
