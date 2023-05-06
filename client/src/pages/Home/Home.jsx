import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase/config'
import farm from '../../assets/farm.jpeg'
import farmgf from '../../assets/farmgf.gif'
import mitt from '../../assets/mitt.jpeg'
import mittgf from '../../assets/mittgf.gif'
import chick from '../../assets/chick.jpg'
import chickgf from '../../assets/chickgf.gif'


const Home = () => {

  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  useEffect(() => { 
    const call = async () => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })
      const response = await supabase.auth.getSession()
      setSession(response.data.session)

      console.log(session)
  
      if(session)
        console.log("Logged")
      else
      console.log("Not Logged")
    }
    call()

  }, [])

  return (
    <>
      <div className='container max-w-screen-lg mx-auto px-5 mb-10 mt-5'>
        <div className='flex justify-between'>
          <div className=''>
            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>Revolutionize your <br />crop and poultry<br />health<br />management.</h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Harness the power of technology to protect your crop and poultry from disease.</p>
          </div>
          <div className='mt-16 w-4/5'>
            <img src={farmgf} className=' rounded-3xl shadow-emerald-300 shadow-md border-2' />
          </div>
        </div>

        {/* PLANT-DETECTION */}

        <div className='flex justify-between mt-12'>
          <div className='w-4/5'>
            <img src={mittgf} className=' rounded-3xl  shadow-emerald-300 shadow-md border-2' />
          </div>
          <div className='flex flex-col  justify-evenly h-100  ml-4'>
            <p class="text-lg font-normal parHome text-gray-500 lg:text-xl dark:text-gray-400">With Chicken65, farmers can easily detect diseases in their crops and plants at an early stage, allowing for timely intervention and containment.</p>
            <div className="card cursor-pointer">
              <Link to='/plant'><button className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4  px-6 py-2  text-white bg-[#14b8a6]  rounded-lg hover:bg-[#0f766e]'>Plant Disease Detection</button></Link>
            </div>
          </div>
        </div>

        {/* CHICK-DETECTION */}
        <div className='flex justify-between mt-12'>
          <div className='w-4/5'>
            <img src={chickgf} className=' rounded-3xl  shadow-emerald-300 shadow-md border-2' />
          </div>
          <div className='flex flex-col  justify-evenly h-100  ml-4'>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">With Chicken65, farmers can easily detect diseases in their crops and plants at an early stage, allowing for timely intervention and containment.</p>
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