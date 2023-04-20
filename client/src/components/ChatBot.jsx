import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
const ChatBot = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  }
  return (
    <div>
      <div className="chatbot flex flex-col justify-between  w-[500px] border-[Red] h-[600px] border-solid border-[2px] m-3 bg-[white]">
            <div className="header flex justify-center items-center h-[50px] w-[496px] bg-[yellow]">
                <h1 className="text-2xl font-bold ">Consultant Bot</h1>
            </div>

            <form onSubmit={handleSubmit} >
               <input type="text" className="m-2 p-2 w-[480px] h-[50px] border-[2px] border-solid border-[black] rounded-[5px]" placeholder='Ask more questions related to disease....'/>
               <button className='text-xl absolute right-[30px] bottom-[50px]' onClick={handleSubmit}><BsFillSendFill/></button>
            </form>
       </div>
    </div>
  )
}

export default ChatBot
