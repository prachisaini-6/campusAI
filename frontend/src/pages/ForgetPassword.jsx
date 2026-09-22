import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Password reset link has been sent to your email.");
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <div className="auth-logo">CampusAI</div>

        <h1>Forgot Password?</h1>

        <p className="auth-subtitle">
          Enter your email address and we will help you reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="auth-button"
          >
            Send Reset Link →
          </button>

        </form>

        <p className="register-text">
          Remember your password?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;