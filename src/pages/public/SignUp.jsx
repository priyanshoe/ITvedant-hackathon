import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='relative flex items-center justify-center gap-0'>
  {/* Hero / Side Section (Hidden on Mobile) */}
  <div className="absuloute top-0 left-0 bottom-0 hidden lg:flex lg:w-1/3 xl:w-2/5 px-xl gap-10 flex-col justify-between overflow-hidden">
    <div className="relative z-10">
      <h1 className="font-headline-md text-headline-md font-bold text-primary mb-sm">
        CarePulse
      </h1>
      <p className=" text-body-lg text-on-surface-variant ">
        Your health journey, unified and secure.
      </p>
    </div>
    <div className="relative z-10 neomorphic-card p-lg rounded-xl glass-sidebar">
      <div className="flex items-center gap-base mb-md">
        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
          <span className="material-symbols-outlined">verified_user</span>
        </div>
        <div>
          <h3 className="font-label-md text-label-md text-on-surface">
            HIPAA Compliant
          </h3>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Your data is encrypted and private.
          </p>
        </div>
      </div>
      <div className="space-y-sm">
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check_circle
          </span>
          <span className="text-label-md font-label-md">
            Personalized Care Plans
          </span>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check_circle
          </span>
          <span className="text-label-md font-label-md">
            24/7 Practitioner Access
          </span>
        </div>
        <div className="flex items-center gap-sm">
          <span
            className="material-symbols-outlined text-primary text-[20px]"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            check_circle
          </span>
          <span className="text-label-md font-label-md">
            Seamless Record Sharing
          </span>
        </div>
      </div>
    </div>
    <div className="relative z-10">
      <div
        className="w-full h-75 rounded-xl overflow-hidden shadow-xl"
        data-alt="A high-end, professionally photographed medical facility interior. The space is bright and airy with large windows, featuring modern glass dividers, ergonomic furniture in soft blue and white tones, and lush green plants. The atmosphere conveys trust, cleanliness, and advanced technological integration in a serene clinical setting."
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIK6dZnuAqU7ASz0ppi3UJ-L8uadyLgBkGyxElLhZwWWmt5xbydszUDvJvBPFtyYxoAhc7lJDQEZmdF9NBrKyeudWG1vt1CmGxH3uqFgAIGiZ6oIA4dQIAopM8WA7Ixpn1AvktXvA4tAmtJi94brXh1yJ4M8AVwt3vUJ3ZcjiDEMhJjOL5FGhH4jLFsmoGPNuIvtcbh3wM_Nr1erEqK6Zs36aeqGgdFqaUygGYqAbN4dD1q_94ulYW0NJ_gmx57K0_ieNCDmu5pmk")'
        }}
      />
    </div>
  </div>
  {/* Main Form Container */}
  <main className="min-h-screen flex items-center justify-center p-md md:p-xl">
    <div className="w-full max-w-2xl">
      {/* Progress Indicator */}
      <div className="mb-xl">
        <div className="flex justify-between items-center mb-base">
          <span
            className="font-label-md text-label-md text-primary uppercase tracking-wider"
            id="step-label"
          >
            Step 1 of 3: Account Security
          </span>
          <span
            className="font-label-sm text-label-sm text-on-surface-variant"
            id="step-percentage"
          >
            33% Complete
          </span>
        </div>
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-primary to-secondary-container transition-all duration-700 ease-out"
            id="progress-bar"
            style={{ width: "33%" }}
          />
        </div>
      </div>
      {/* Registration Steps */}
      <div className="relative">
        <form className="space-y-lg" id="registration-form">
          {/* Step 1: Basic Info */}
          <div
            className="step-transition opacity-100 transform translate-x-0"
            id="step-1"
          >
            <header className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                Welcome to CarePulse
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Let's start with your basic information.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Full Name
                </label>
                <input
                  className="neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  placeholder="John Doe"
                  required=""
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Email Address
                </label>
                <input
                  className="neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  placeholder="john@example.com"
                  required=""
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                    placeholder="••••••••"
                    required=""
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer">
                    visibility
                  </span>
                </div>
                <p className="text-[11px] text-on-surface-variant mt-1 ml-xs">
                  Must be at least 8 characters with a symbol.
                </p>
              </div>
            </div>
          </div>
          {/* Step 2: Patient Profile (Hidden initially) */}
          <div
            className="step-transition hidden opacity-0 transform translate-x-12"
            id="step-2"
          >
            <header className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                Patient Profile
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                This helps us personalize your medical dashboard.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Date of Birth
                </label>
                <input
                  className="neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  required=""
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Gender Identity
                </label>
                <select
                  className="neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow appearance-none"
                  required=""
                >
                  <option disabled="" selected="" value="">
                    Select option
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs md:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant ml-xs">
                  Known Allergies
                </label>
                <textarea
                  className="neomorphic-inset border-none rounded-xl px-md py-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  placeholder="e.g. Penicillin, Peanuts (Optional)"
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/* Step 3: Identity Verification (Hidden initially) */}
          <div
            className="step-transition hidden opacity-0 transform translate-x-12"
            id="step-3"
          >
            <header className="mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                Verification
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Upload a government ID to finalize your account.
              </p>
            </header>
            <div className="neomorphic-card rounded-xl p-xl border-dashed border-2 border-outline-variant flex flex-col items-center justify-center text-center space-y-md cursor-pointer hover:bg-surface-container transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-headline-lg">
                  cloud_upload
                </span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">
                  Click to upload or drag &amp; drop
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  SVG, PNG, JPG or PDF (max. 5MB)
                </p>
              </div>
              <input className="hidden" id="id-upload" type="file" />
            </div>
            <div className="flex items-start gap-sm mt-lg">
              <input
                className="mt-1 rounded border-outline-variant text-primary focus:ring-primary"
                id="terms"
                required=""
                type="checkbox"
              />
              <label
                className="font-label-sm text-label-sm text-on-surface-variant"
                htmlFor="terms"
              >
                I agree to the{" "}
                <a className="text-primary hover:underline" href="#">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a className="text-primary hover:underline" href="#">
                  Privacy Policy
                </a>
                . I understand that my medical data is strictly confidential.
              </label>
            </div>
          </div>
          {/* Form Controls */}
          <div className="flex items-center justify-between pt-lg">
            <button
              className="hidden items-center gap-xs font-label-md text-label-md text-primary px-lg py-sm rounded-xl hover:bg-primary/5 transition-colors"
              id="prev-btn"
              type="button"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back
            </button>
            <div className="grow" />
            <button
              className="bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md px-xl py-sm rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-xs"
              id="next-btn"
              type="button"
            >
              Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
        {/* Success Screen (Hidden/Flex) */}
        <div
          className="hidden opacity-0 scale-95 flex-col items-center justify-center text-center py-xl space-y-lg transition-all duration-700"
          id="success-screen"
        >
          <div className="w-32 h-32 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary text-[64px]"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                check_circle
              </span>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Registration Complete!
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
              Your account is being verified. You can now explore your patient
              dashboard and book your first appointment.
            </p>
          </div>
          <a
            className="bg-primary text-white font-label-md text-label-md px-xl py-md rounded-xl shadow-xl hover:bg-primary-container transition-all inline-block"
            href="/dashboard"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
      {/* Existing Account Link */}
      <div className="mt-xl text-center" id="auth-footer">
        <p className="font-label-md text-label-md text-on-surface-variant">
          Already have an account?{" "}
          <Link to={"/sign-in"} className="text-primary font-bold hover:underline" href="#">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  </main>
</div>

  )
}

export default SignUp