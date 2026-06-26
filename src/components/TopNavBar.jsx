import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavBar() {
    const role = localStorage.getItem("role")
    const navElem = [
        {
            lable:"Home",
            href:"/"
        },
        {
            lable:"About",
            href:"/about"
        },
        {
            lable:"Contact",
            href:"/contact"
        },
        {
            lable:"Sign In",
            href:"/sign-in"
        },
        {
            lable:"Sign Up",
            href:"/sign-up"
        },
        {
            lable:"Sign Out",
            href:"/sign-out"
        },
    ]
    
  return (
  <nav className="sticky bg-background/80 dark:bg-on-background/80 backdrop-blur-xl flex justify-between items-center w-full px-lg py-sm max-w-container-max mx-auto z-50 docked full-width top-0 border-b dark:border-outline-variant/30 border-outline/20 shadow-sm transition-all duration-300 ease-in-out">
    <div className="text-headline-md font-bold text-primary dark:text-primary-fixed">
        <Link to={"/"}>
      CarePulse
        </Link>
    </div>
    <div className="hidden md:flex items-center gap-lg">
        {
            navElem.map((item,id)=>(
                <NavLink key={id}
                to={item.href}
                    className={({isActive})=>
                    isActive
                    ? "font-label-md text-label-md text-primary dark:text-primary-fixed bg-primary-fixed/10 font-bold border-b-2 border-primary pb-1"
                    : "font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors hover:bg-primary/5 dark:hover:bg-primary-fixed/10 rounded-lg px-2 py-1"
                    }
                >
                    {item.lable}
                </NavLink>
            ))
        }
    </div>
    <Link to={role==="admin"?"admin/dashboard":"sign-in"}>
    <button className="bg-primary-container cursor-pointer text-on-primary px-6 py-2.5 rounded-md font-label-md label-md hover:opacity-90 active:scale-95 transition-all duration-300">
      {true? "Dashboard": "Sign In"}
    </button>
    </Link>
  </nav>
  )
}

export default TopNavBar