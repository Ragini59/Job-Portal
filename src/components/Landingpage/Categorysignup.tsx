import { categoryActive, jobproviderActive, jobseekerActive } from '@/Ruduxtoolkit/registerSlice'
import React from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { useDispatch } from 'react-redux'


const Categorysignup = () => {

    const dispatch = useDispatch()
  return (
    <div className="forgotpassword w-[500px] bg-[#af8dff65] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 p-10 rounded-lg backdrop-blur-md">
        <GiCrossMark className="text-3xl text-white cursor-pointer hover:text-red-500 absolute right-4 top-4"
               onClick={()=>dispatch(categoryActive(false))} 
               />
        <h2 className="text-center font-bold text-white text-3xl mb-5">Select signup category</h2>
        <h2 className= 'w-[80%] h-[100px] rounded-lg px-2 py-4 bg-white my-8 mx-auto flex items-center justify-center text-xl text-center text-pink-500 cursor-pointer'
        onClick={()=>{
          dispatch(jobproviderActive(true))
          dispatch(categoryActive(false))
        }}
        >
            Jobseeker
            Create free account to apply!
        </h2><h2 className= 'w-[80%] h-[100px] rounded-lg px-2 py-4 bg-white my-8 mx-auto flex items-center justify-center text-xl text-center text-pink-500 cursor-pointer'>
            Job Provider
            Create free account to post vacancy
        </h2>
    </div>
  )
}

export default Categorysignup