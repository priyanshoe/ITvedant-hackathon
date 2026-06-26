import React from 'react'
import {Outlet } from "react-router-dom"
import TopNavBar from '../components/TopNavBar'
function MainLayout() {
  return (
    <>
    <TopNavBar
    // logo={}
    logoAlt='AI-Cnct'
    items={[
      {label:"Home", href:"/"},
          {label:"About", href:"/about"},
          {label:"Contact", href:"/contact"},
          {label:"Sign In", href:"/sign-in"},
          {label:"Sign Up", href:"/sign-up"},
          {label:"Sign Out", href:"/sign-out"},
        ]}
        // activeHref="/"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="light"
        initialLoadAnimation={false}
        />
      
      <main>
      <Outlet/>
    </main>
    </>
  )
}

export default MainLayout