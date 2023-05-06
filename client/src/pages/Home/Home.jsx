import React, { useEffect } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import farm from '../../assets/farm.jpeg'
import mitt from '../../assets/mitt.jpeg'
import chick from '../../assets/chick.jpg'
import { auth } from '../../firebase'
const Home = () => {

  const navigate = useNavigate()
   
  useEffect(() => { 
    if(!auth.currentUser){
      navigate('/')
    }
    

  }, [])

  return (
    <>
      <div className='container max-w-screen-lg mx-auto px-5'>
        <div className='flex justify-between'>
          <div className=''>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight headingHome  md:text-5xl lg:text-6xl dark:text-black'>Revolutionize your <br />crop and poultry<br />health<br />management.</h1>
            <p class="text-lg font-normal parHome lg:text-xl dark:text-gray-400">Harness the power of technology to protect your crop and poultry from disease.</p>
          </div>
          <div className='mt-16 w-4/5'>
            <img src={farm} className=' rounded-3xl shadow-emerald-300 shadow-md border-2' />
          </div>
        </div>

        {/* PLANT-DETECTION */}

        <div className='flex justify-between mt-12'>
          <div className='w-4/5'>
            <img src={mitt} className=' rounded-3xl  shadow-emerald-300 shadow-md border-2' />
          </div>
          <div className='flex flex-col  justify-evenly h-100  ml-4'>
            <p class="text-lg font-normal parHome lg:text-xl dark:text-gray-400">With Chicken65, farmers can easily detect diseases in their crops and plants at an early stage, allowing for timely intervention and containment.</p>
            <div className="card cursor-pointer">
              <Link to='/plant'><button className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4  px-6 py-2  text-white bg-[#14b8a6]  rounded-lg hover:bg-[#0f766e]'>Plant Disease Detection</button></Link>
            </div>
          </div>
        </div>

        {/* CHICK-DETECTION */}
        <div className='flex justify-between mt-12'>
          <div className='w-4/5'>
            <img src={chick} className=' rounded-3xl  shadow-emerald-300 shadow-md border-2' />
          </div>
          <div className='flex flex-col  justify-evenly h-100  ml-4'>
            <p class="text-lg font-normal parHome lg:text-xl dark:text-gray-400">With Chicken65, farmers can easily detect diseases in their crops and plants at an early stage, allowing for timely intervention and containment.</p>
            <div className="card cursor-pointer">
              <Link to='/chicken'><button className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4  px-6 py-2  text-white bg-[#14b8a6]  rounded-lg hover:bg-[#0f766e]'>Chicken Disease Detection</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
