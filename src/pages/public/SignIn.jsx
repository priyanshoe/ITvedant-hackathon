import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  const [formData, setFormData] = useState({
    email:"",
    password:""
  })
  const handleSubmit = (e) =>{
    e.preventDefault()
    setUser(formData);
      localStorage.setItem("role","admin")
      console.log(formData);
      
    navigate("/admin/dashboard")
  }
  return (
    <>
  <div className="relative flex min-h-screen w-full overflow-hidden">
    {/* Animated Background Elements */}
    <div className="blob-bg -top-25 -left-25" />
    <div
      className="blob-bg bottom--50 -right-50"
      style={{
        animationDelay: "-5s",
        background: "linear-gradient(135deg, #0052cc 0%, #76e2ff 100%)"
      }}
    />
    {/* Left Column: Branding & Form */}
    <div className="w-full lg:w-1/2 flex flex-col p-lg lg:p-xl relative z-10">
      {/* Top Logo (Simplified TopNavBar context) */}
      <div className="flex items-center mb-xl">
        <div className="w-10 h-10 rounded-xl bg-primary-container flex items-center justify-center text-on-primary mr-sm shadow-lg">
          <span className="material-symbols-outlined">medical_services</span>
        </div>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">
          CarePulse
        </h1>
      </div>
      {/* Login Card Container */}
      <div className="flex-1 flex flex-col justify-center max-w-120 mx-auto w-full">
        <div className="glass-card rounded-4xl p-lg lg:p-xl shadow-2xl relative overflow-hidden">
          {/* Card Header */}
          <div className="mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
              Welcome Back
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Sign in to access your patient dashboard and medical records.
            </p>
          </div>
          {/* Social Login */}
          <div className="grid grid-cols-2 gap-md mb-lg">
            <button className="neomorphic-base hover:shadow-lg transition-all duration-300 rounded-xl py-sm px-md flex items-center justify-center gap-base active:scale-95">
              <img
                alt="Google Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAswEQ0CGKXo6JL96tOKiJ1kCacvfvLqlAll4UB3sXTFI96nKybaa5kEPfKAJthBZbq29xqpL033Eot7tQqdlF2R3qKXM-zTVNsdgh10XQ6radmz30RktwzBTy8ic_K-s2efViaqT4cik9RHllRg6weL1wAxzo4oTMVS0KhRQI9r3qSyVrcn8cO2bZI8Q5sdD9J2ZnIw4YPTLzFf2AaTlhKkaQemIiaI3pi3aUH2PwG9rcICGgHFM73OEfGMUj4yTNeCIyNqfvzcTU"
              />
              <span className="font-label-md text-label-md">Google</span>
            </button>
            <button className="neomorphic-base hover:shadow-lg transition-all duration-300 rounded-xl py-sm px-md flex items-center justify-center gap-base active:scale-95">
              <img
                alt="Apple Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT6L59v7dmCzBIFtPwOxLWHWmqiArzOAUWtvc-siWfmEZIiBGK8OjIfO8TzMw-VfO29b0JD6MU9uZ9LjaxoJafNeoXhiZmlo8n_9kvBzN1IHOhwn-7fDData1k6MC1vatxc0YZqQZl0_hkJ6n64woS8Gn4NAShuJDM42Pzu3-U2Fnmfvlx5dhwSQ3rfTiVhLfr_G_N7680rpInnqzDuy1-X5iMSZ-FKDyx_cZTKvJCDVpHhKCqjkKuG6UvLdGxCRQsmSkyQBFR1yo"
              />
              <span className="font-label-md text-label-md">Apple</span>
            </button>
          </div>
          <div className="relative flex items-center gap-base mb-lg">
            <div className="grow h-px bg-outline-variant/30" />
            <span className="font-label-sm text-label-sm text-outline px-sm uppercase tracking-widest">
              or email
            </span>
            <div className="grow h-px bg-outline-variant/30" />
          </div>
          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-lg" onsubmit="event.preventDefault();">
            <div className="space-y-xs">
              <label
                className="font-label-md text-label-md text-on-surface-variant block ml-base"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">
                  mail
                </span>
                <input
                  className="w-full neomorphic-inset border-none rounded-xl py-sm pl-xl pr-md font-body-md text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none"
                  id="email"
                  placeholder="dr.smith@carepulse.com"
                  type="email"
                  value={formData.email}
                  onChange={(e)=>setFormData({...formData,email:e.target.value})}
                />
              </div>
            </div>
            <div className="space-y-xs">
              <div className="flex justify-between items-center px-base">
                <label
                  className="font-label-md text-label-md text-on-surface-variant"
                  htmlFor="password"
                >
                  Password
                </label>
                <a
                  className="font-label-sm text-label-sm text-primary hover:underline transition-all"
                  href="#"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">
                  lock
                </span>
                <input
                  className="w-full neomorphic-inset border-none rounded-xl py-sm pl-xl pr-md font-body-md text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={formData.password}
                  onChange={(e)=>setFormData({...formData,password:e.target.value})}
                />
                <button
                  className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-sm px-base">
              <input
                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                id="remember"
                type="checkbox"
              />
              <label
                className="font-label-md text-label-md text-on-surface-variant"
                htmlFor="remember"
              >
                Stay signed in for 30 days
              </label>
            </div>
            <button
              className="w-full bg-primary-container text-on-primary font-label-md text-label-md py-md rounded-xl shadow-lg hover:shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-sm group"
              type="submit"
            >
              Sign In to Portal
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </form>
          {/* Footer Link */}
          <div className="mt-xl text-center">
            <p className="font-body-md text-on-surface-variant">
              New to CarePulse?{" "}
              <Link to={"/sign-up"} className="text-primary font-bold hover:underline" href="#">
                Create an account
              </Link>
            </p>
          </div>
        </div>
        {/* Trust Badges */}
        <div className="mt-lg flex justify-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-body-md">
              verified_user
            </span>
            <span className="text-lable-sm font-semibold tracking-wider uppercase">
              HIPAA Compliant
            </span>
          </div>
          <div className="flex items-center gap-xs">
            <span className="material-symbols-outlined text-body-md">
              encrypted
            </span>
            <span className="text-lable-sm font-semibold tracking-wider uppercase">
              256-bit AES
            </span>
          </div>
        </div>
      </div>
      {/* Page Footer (Shared Component Context) */}
      <div className="mt-auto pt-xl">
        <p className="font-label-sm text-label-sm text-on-surface-variant/70 text-center lg:text-left">
          © 2024 CarePulse Healthcare. All rights reserved.{" "}
          <br className="lg:hidden" />
          <a className="hover:text-primary transition-colors mx-sm" href="#">
            Privacy Policy
          </a>{" "}
          •
          <a className="hover:text-primary transition-colors mx-sm" href="#">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
    {/* Right Column: Illustration */}
    <div className="hidden lg:block lg:w-1/2 relative bg-surface-container-low">
      {/* Medical Illustration Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXwH0frgmJ7A0CgOf91vQeqjYFPLmqRLXS3YDlGZDzBS_AsTKEATz-ZLMrZwWU8RTXgrxIE90_0TQTypwNDTYH93SXP1w6XTx5FHMFEjq08hpYMmf8wxjyH2TvX5NWMcplKl_5---ECT7bCazOfapin9W363qSfnr0KRwFJUwaOGDyT2SQflXcp4lvJntt3HKNeuTNR-XOjcLmHi8S-6YZMglcEpGxLAXnsCED2CSR-oLnaaD3nqYZF7-zYiOw7qsnsesuRUwzxHs"
        />
        {/* Overlay Gradient for Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-transparent to-transparent" />
      </div>
      {/* Content Overlay on Illustration */}
      <div className="absolute bottom-xl left-xl right-xl z-20">
        <div className="glass-card rounded-4xl maxw-lg p-xl shadow-2xl animate-fade-in-up">
          <div className="flex items-center gap-md mb-md">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-container-high" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-surface-dim" />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary-container" />
            </div>
            <span className="font-label-md text-label-md text-on-surface">
              Trusted by 2,500+ clinics worldwide
            </span>
          </div>
          <p className="font-headline-md text-headline-md text-primary mb-sm leading-tight italic">
            "CarePulse has revolutionized how we manage patient intake and
            follow-ups. Efficiency has increased by 40%."
          </p>
          <div className="flex items-center gap-sm">
            <div className="w-1 h-12 bg-primary rounded-full" />
            <div>
              <p className="font-label-md text-label-md text-on-surface">
                Dr. Sarah Jenkins
              </p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">
                Chief of Medicine, Metro General
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Health Indicators Decorative Elements */}
      <div className="absolute top-xl right-xl z-20 space-y-md">
        <div className="glass-card rounded-2xl p-md flex items-center gap-md shadow-xl animate-bounce-slow">
          <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary-container">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              favorite
            </span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
              Heart Rate
            </p>
            <p className="font-headline-md text-headline-md text-on-surface">
              72 <span className="text-body-md">BPM</span>
            </p>
          </div>
          <div className="ml-auto">
            <div className="h-8 w-16 flex items-end gap-0.5">
              <div className="bg-tertiary-container/40 h-2 w-full rounded-t-sm" />
              <div className="bg-tertiary-container/60 h-4 w-full rounded-t-sm" />
              <div className="bg-tertiary-container h-6 w-full rounded-t-sm" />
              <div className="bg-tertiary-container/50 h-3 w-full rounded-t-sm" />
            </div>
          </div>
        </div>
        <div
          className="glass-card rounded-2xl p-md flex items-center gap-md shadow-xl -translate-x-5 animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              calendar_today
            </span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">
              Next Session
            </p>
            <p className="font-headline-md text-headline-md text-on-surface">
              10:30 AM
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default SignIn