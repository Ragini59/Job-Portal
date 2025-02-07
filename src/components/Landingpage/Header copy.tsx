import React from 'react'
import { Button } from '../ui/button'
import Navlinks from './Navlinks'

const Header = () => {
  return (
    <header className='bg-[#2a1b3d] px-10 py-3 flex justify-between'>
        <div className="logo">
            <h1 className='text-3xl capitalize text-white '>Online Job Portal</h1>
        </div>
<Navlinks/>
        
        <div className="btn">
            <Button className='border-none  bg-[#D83F87]'>signup</Button>
        </div>
    </header>
  )
}

export default Header