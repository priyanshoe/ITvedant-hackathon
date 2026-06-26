import React from 'react'

function Footer() {
  return (
  <footer className="bg-surface-container-lowest dark:bg-on-background border-t dark:border-outline-variant border-outline/30 mt-xl">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-lg py-xl max-w-container-max mx-auto">
      <div className="col-span-1 md:col-span-1">
        <div className="headline-md font-bold text-primary mb-4">
          CarePulse
        </div>
        <p className="text-on-surface-variant dark:text-surface-variant font-body-md mb-6">
          Redefining modern healthcare with technology and human compassion.
        </p>
        <div className="flex gap-4">
          <a
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">public</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">chat</span>
          </a>
          <a
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            href="#"
          >
            <span className="material-symbols-outlined">share</span>
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-label-md text-label-md text-primary mb-4">
          Services
        </h5>
        <ul className="space-y-2">
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Emergency Services
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Specialist Search
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Telemedicine
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Clinical Lab Test
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-label-md text-label-md text-primary mb-4">Legal</h5>
        <ul className="space-y-2">
          <li>
            <a
              className="font-label-sm text-label-sm dark:text-on-surface-variant text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="font-label-md text-label-md text-primary mb-4">
          Resources
        </h5>
        <ul className="space-y-2">
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Careers
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              className="font-label-sm text-label-sm text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              Community
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-outline-variant/10 py-6 text-center max-w-container-max mx-auto">
      <p className="font-label-sm text-label-sm dark:text-on-surface-variant text-surface-variant opacity-60">
        © 2024 CarePulse Healthcare. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer