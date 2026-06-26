import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBar() {
    const navLinks = [
        {
            icon:"dashboard",
            lable:"Overview",
            href:"/admin/dashboard"
        },
        {
            icon:"calendar_today",
            lable:"Appointments",
            href:"appointments"
        },
        {
            icon:"patient_list",
            lable:"Patients",
            href:"patients"
        },
        {
            icon:"medical_services",
            lable:"Doctors/Specialists",
            href:"doctors"
        },
        {
            icon:"analytics",
            lable:"Reports",
            href:"reports"
        },
        {
            icon:"logout",
            lable:"Sign-out",
            href:"/sign-out"
        },
    ]
  return (
    <aside className="w-72 glass-sidebar border-r border-outline-variant/30 flex-col hidden md:flex h-screen sticky top-0">
      <div className="p-lg">
        <div className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-primary text-3xl"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            pulse_alert
          </span>
          CarePulse
        </div>
      </div>
      <nav className="flex-1 px-md space-y-xs">
        {
            navLinks.map((item,id)=>(
            <NavLink
            key={id}
            to={item.href}
            className={({isActive})=>
            isActive
            ? "flex items-center gap-md p-md rounded-xl bg-primary-container text-on-primary-container font-bold transition-all duration-300"
            : "flex items-center gap-sm p-sm rounded-xl text-on-surface-variant hover:bg-primary/5 transition-all"
            }
            >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-label-md text-label-md">{item.lable}</span>
            </NavLink>

            ))
        }

        
      </nav>
      <div className="p-md mt-auto border-t border-outline-variant/20">
        <div className="flex items-center gap-md p-sm bg-surface-container-low rounded-xl">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">
            AD
          </div>
          <div>
            <div className="font-label-md text-label-md text-on-surface">
              Admin User
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant">
              System Manager
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar