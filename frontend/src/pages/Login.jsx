import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Backend login will be connected later.");
  };

  return (
    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-info">
          <div className="auth-logo">CampusAI</div>

          <h1>Welcome Back 👋</h1>

          <p>
            Continue your journey and discover opportunities
            that match your skills and career goals.
          </p>

          <div className="auth-feature">
            <span>✓</span>
            Personalized opportunity recommendations
          </div>

          <div className="auth-feature">
            <span>✓</span>
            AI-powered career assistance
          </div>

          <div className="auth-feature">
            <span>✓</span>
            Track your applications and deadlines
          </div>
        </div>

        <div className="auth-box">

          <h2>Login to your account</h2>

          <p className="auth-subtitle">
            Enter your details to continue
          </p>

          <form onSubmit={handleLogin}>

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
                placeholder="Enter your password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            <div className="forgot-link">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button className="auth-button" type="submit">
              Login →
            </button>

          </form>

          <p className="register-text">
            Don't have an account?
            <Link to="/register"> Create Account</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;