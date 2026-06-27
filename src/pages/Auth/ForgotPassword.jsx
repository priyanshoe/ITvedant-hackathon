import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can call your API here
    alert(`Password reset link sent to ${email}`);

    setEmail("");
  };
  return (
    <>
      <div className="forgot-container">
        <div className="forgot-card">
          <h2>Forgot Password?</h2>

          <p>
            Enter your registered email address and we'll send you a password
            reset link.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Send Reset Link</button>
          </form>

          <a href="/">← Back to Login</a>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
