import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
  return (
    <div className='w-full bg-cyan-500 h-[calc(100vh-128px)] flex flex-col items-center justify-center'>
     <Outlet />
    </div>
  )
}

export default Container