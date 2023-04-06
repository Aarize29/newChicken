import React from 'react'
import './MainPart.css'
const MainPart = () => {
  return (
    <div className='flex mt-5'>
       <div className="model columns-12 border-[Red] h-[600px] border-solid border-[2px] m-3 ">
            I am Model
       </div>
       <div className="chatbot columns-5 border-[Red] h-[600px] border-solid border-[2px] m-3">
            I am Chatbot
       </div>
    </div>
  )
}

export default MainPart
