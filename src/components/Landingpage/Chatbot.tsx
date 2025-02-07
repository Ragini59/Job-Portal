import { chatbotActive } from '@/Ruduxtoolkit/registerSlice'
import React from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { useDispatch } from 'react-redux'

const Chatbot = () => {
    const dispatch = useDispatch()
  return (
    <div className="forgotpassword w-[500px]h-[500px] bg-[#af8dff65] translate-y-[-50%] z-50 p-10 rounded-lg backdrop-blur-md">
            <GiCrossMark className="text-3xl text-white cursor-pointer hover:text-red-500 absolute right-4 top-4"
                   onClick={()=>dispatch(chatbotActive(false))} 
                   />
            
            
        
            </div>
  )
}

export default Chatbot