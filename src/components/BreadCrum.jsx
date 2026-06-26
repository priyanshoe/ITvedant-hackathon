import React from 'react'

function BreadCrum() {
  return (
    <nav className="mb-lg flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <a className="hover:text-primary transition-colors" href="#">
            Cardiologists
          </a>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-on-surface">Dr. Jonathan Reed</span>
        </nav>
  )
}

export default BreadCrum