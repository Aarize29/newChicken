import React, {useState} from 'react'
import './MainPart.css'
import ChatBot from "/src/components/ChatBot/ChatBot"
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";
import NavBar from "/src/components/NavBar/Navbar"
import * as tf from '@tensorflow/tfjs';
import db from '/src/firebase'
import { collection, addDoc } from "firebase/firestore"; 
import {TbMessageChatbot} from 'react-icons/tb'

import Popup from '../../../components/popupchatbot/Popup';

const MainPart = () => {
  const [imageUpload, setImageUpload] = useState(null)
  const [form,setForm]=useState({
      name:'',
      prompt:'',
      photo:'',
  })
  const [predictedDisease,setPredictedDisease]=useState("No Disease")
  
  const [buttonPopup, setButtonPopup] = useState(false)
 
  const view=()=>{
    setButtonPopup(true);
  }

  console.log(imageUpload)
  const handleUpload = (e) => {
    const file=e.target.files[0]
    setImageUpload(file);

    if(file && file.type.substr(0,5)==='image'){
        const reader=new FileReader()
        reader.onloadend=()=>{
            setForm({...form,photo:reader.result})
        }
        reader.readAsDataURL(file)
    }
    else{
        alert('Please upload animage')
    }
    }
   
    const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
  }

  //Most Important Function
  const handlPrediction= async(e)=>{
    e.preventDefault()
    
    const data=await addDoc(collection(db, "plantdisease"), {
      name:predictedDisease,
      time: new Date().toLocaleString()
    });

    alert("Prediction added to database")
  }
  
  return (
    <>
      {/* <NavBar /> */}
      <div className='main flex lg:flex-row flex-col    justify-between mt-10 lg:mt-5'>
       <div className="model flex flex-col  justify-center items-center   lg:w-[950px]  lg:h-[600px] lg:border-solid border-[2px] lg:m-3 m-5 ">
         <h1 className='lg:text-2xl text-1xl mb-10  font-bold'>Upload image to detect plant disease</h1>
         <form className='flex flex-col items-center justify center' onSubmit={handlPrediction}>
          <div className='lg:text-xl text-1xl flex justify-center items-center   md:w-[500px] md:h-[300px] border-solid border-2 rounded-[15px]'>
           {form.photo ? <img src={form.photo} alt="uploaded" className=' w-[400px] h-[199px]  md:w-[500px] md:h-[299px]  border-2 lg:w-[500px] lg:h-[300px] border-solid border-4 rounded:-[5px] md:rounded-[15px]'/> : <h1 className=' font-bold'>No Image Uploaded</h1>}
          </div>
          <div className='flex'>
                <label htmlFor="photo" className="cursor-pointer">
                    <div className='mt-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Upload</div>
                    <input type="file" accept="image/*" capture='environment' name="photo" id="photo" className="sr-only" onChange={handleUpload} />
                </label>
                <button className='m-3 text-white bg-[#6469ff] hover:text-[#6469ff] hover:bg-blue-200 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'  type='submit'>Predict</button>
            </div>
            </form>
           <h1 className='lg:text-2xl text-1xl font-bold  m-5'>{predictedDisease}</h1>
       </div>
       <div className='hidden lg:block'>
       <h1 className="font-bold flex justify-center lg:hidden">
          HelperBot
       </h1>
       <ChatBot/>
       </div>
       {/* for mobile */}
       <div className=' flex lg:hidden justify-end mr-10 text-2xl' >
         <button onClick={view} className='flex'>
          <TbMessageChatbot/> <h1 className='text-sm'>HelperBot</h1>
          </button> 
       </div>


       {/*Pop */}
       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}  >
       <div className="flex flex-col  justify-center  items-center lg:hidden">
       <h1 className='text-xl font-bold text-gray-700 flex justify-center'>Helper Bot</h1>

        <div className='w-[350px] h-[400px] flex justify-center items-center '>
          <ChatBot/>
        </div>
       </div>
</Popup>
    </div>
    </>
  )
}

export default MainPart
