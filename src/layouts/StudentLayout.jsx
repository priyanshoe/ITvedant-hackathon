import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

function StudentLayout() {
  return (
    <div className='flex'>
      <SideBar/>
    <main>
      <div className='h-full w-[70%]'>
    <Outlet/>

      </div>
    </main>
    </div>
  )
}

export default StudentLayout