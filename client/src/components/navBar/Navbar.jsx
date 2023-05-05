import React,{useState,useEffect}from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsSun,BsFillMoonFill } from 'react-icons/bs'
import {DiGoogleAnalytics} from 'react-icons/di'
import './Navbar.css'
import { Link } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const [darkMode,setDarkMode]=useState(true)
    const [theme,setTheme]=useState('light-theme')
    const handleDarkmode = () => {  
        setDarkMode(!darkMode)
        if (darkMode) {
          setTheme('dark-theme')
        }
        else {
          setTheme('light-theme')
        }
  }
  useEffect(() => {
    document.body.className = theme
  }
  , [theme])

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className='navbar flex justify-between w-full pr-10 lg:pl-12 pt-10 border-b-2 border-sky-900 border-solid items-center shadow-xl text-1xl lg:text-3xl md:text-2xl shadow-black-900 items-center '>
      <div className='font-bold'>
        <Link to='/'>Chicken 65</Link>
      </div>
      <div className='flex items-center  font-bold  '>
        <div className='mr-5'>
           <Link to='/'>Home</Link>
        </div>
        <div className="mr-5">
          <Link to='/dashboard'><DiGoogleAnalytics/></Link>
        </div>
        <div className='mr-5 cursor-pointer' onClick={handleDarkmode}>
            {darkMode?<BsSun/>:<BsFillMoonFill/>}
        </div>
        <div className='mr-5 cursor-pointer'>
            <a href="https://github.com/Aarize29/chicken_69"><AiFillGithub/></a>
        </div>
      <div className='text-sm text-xl font-bold'>
        <button className='w-full px-6 py-2 mt-4 text-white bg-[#14b8a6] mb-2 rounded-lg hover:bg-[#0f766e]' onClick={handleLogout}>Logout</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
