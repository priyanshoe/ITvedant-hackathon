import { useState } from "react";
import "./SignIn.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container">
      <div className={`auth-container ${isSignUp ? "active" : ""}`}>
        {/* SIGN UP FORM */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>

            <div className="social-container">
              <a href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

            <span>or use your email for registration</span>

            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />

            <input type="password" placeholder="Confirm Password" />

            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* SIGN IN FORM */}

        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In</h1>

            <div className="social-container">
              <a href="#">
                <FontAwesomeIcon icon={faGoogle} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>

            <span>or use your account</span>

            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />

            <a href="#" className="forgot">
              Forgot your password?
            </a>

            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* OVERLAY */}

        <div className="overlay-container">
          <div className="overlay">
            {/* LEFT PANEL */}

            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>

              <p>
                To keep connected with us please login with your personal
                information.
              </p>

              <button className="ghost" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </div>

            {/* RIGHT PANEL */}

            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>

              <p>Enter your personal details and start your journey with us.</p>

              <button className="ghost" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
