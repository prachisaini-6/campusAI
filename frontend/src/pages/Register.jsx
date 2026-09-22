import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Backend registration will be connected later.");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-info">
          <div className="auth-logo">CampusAI</div>

          <h1>Start Your Journey 🚀</h1>

          <p>
            Create your profile and discover internships,
            hackathons, scholarships and courses made for you.
          </p>

          <div className="auth-feature">
            <span>✓</span>
            Personalized opportunity recommendations
          </div>

          <div className="auth-feature">
            <span>✓</span>
            Track applications and deadlines
          </div>

          <div className="auth-feature">
            <span>✓</span>
            Get AI-powered career assistance
          </div>
        </div>

        <div className="auth-box">

          <h2>Create your account</h2>

          <p className="auth-subtitle">
            Join CampusAI and grow your career
          </p>

          <form onSubmit={handleRegister}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>

            <input
              type="email"
              placeholder="you@example.com"
              required
            />

            <label>Password</label>

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            <label>Confirm Password</label>

            <div className="password-field">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>

            </div>

            <button className="auth-button" type="submit">
              Create Account →
            </button>

          </form>

          <p className="register-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;