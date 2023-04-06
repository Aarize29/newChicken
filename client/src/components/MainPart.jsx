import React from 'react'
import './MainPart.css'
import ChatBot from './ChatBot'
const MainPart = () => {
  return (
    <div className='flex justify-between mt-5'>
       <div className="model flex justify-center items-center w-[950px] border-[Red] h-[600px] border-solid border-[2px] m-3 ">
            I am Model
       </div>
       <ChatBot/>
    </div>
  )
}

export default MainPart
