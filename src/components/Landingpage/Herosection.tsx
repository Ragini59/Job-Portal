'use client'

import { Search } from 'lucide-react'
import React from 'react'
import Searchbox from './Searchbox'
import { chatbotActive } from '@/Ruduxtoolkit/registerSlice'
import { useDispatch, useSelector } from 'react-redux'
import Chatbot from './Chatbot'


const Herosection = () => {
    const ischatbotActive = useSelector((state:any)=>state.registeractive.chatbotActive)
    const dispatch = useDispatch()
    return (
        <section className="w-full h-[450px] sm:h-[350px] relative flex justify-center items-center flex-col p-5 md:p-10">
            <div className="image absolute top-0 left-0 w-full h-full -z-10">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww" alt=" " className='w-full h-full object-cover'/>
                <div className="layer w-full h-full  bg-[#190572ad] z-10 absolute top-0 left-0"></div>
            </div>

            <div className="info z-10" >
                <h1 className='text-white text-2xl md:text-3xl lg:text-4xl capitalize my-3 text-center'>"Connectiong Employers with Top Talent Globally."</h1>
                <h2 className='text-white text-xl md:text-2xl lg:text-3xl capitalize my-3 text-center'>Join millions of job seekers finding new opportunities every day.</h2>
               <div className="my-5">
                <Searchbox/>
                </div> 
              



            </div>
            <div className="chatbot fixed right-5 bottom-10 md:top-56 z-30" 
            
            >
                {ischatbotActive && <Chatbot />}
                <img src="./chatbot.gif" alt="chatbot" onClick={()=>dispatch(chatbotActive(true))} />
            </div>
        </section>
    )
}

export default Herosection
