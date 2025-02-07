"use client"
import React , {useState} from 'react'
import { Button } from '../ui/button'
import Navlinks from './Navlinks'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { loginActive } from '@/Ruduxtoolkit/registerSlice'

const Header = () => {
  const [close,setclose] = useState(false)
  const dispatch = useDispatch()
  const sidebarhandle=()=>{
    setclose(!close)
  }
  return (
    <header className='bg-[#2a1b3d] px-10 py-3 flex justify-between'>
        <div className="logo">
            <h1 className=' text-xl sm:text-3xl capitalize text-white '>Online Job Portal</h1>
        </div>
<Navlinks close={close} setclose={setclose}/>
        
        <div className="btn flex gap-3">
            <Button className='border-none  bg-[#D83F87] hover:bg-[#f54698]'
            onClick={()=>{
              dispatch(loginActive(true))
            }}>signup</Button>
            <RxHamburgerMenu color='white' size={40} className='lg:hidden'
            onClick={sidebarhandle}/>
        </div>
    </header>
  )
}

export default Header