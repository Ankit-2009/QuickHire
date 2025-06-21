import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Login attempt with:", { email, password });
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-auth-container">
      <div className="login-border-box">
        <div className="login-gradient-border"></div>
        <div className="login-mask">
          <div className="login-box">
            <div className="login-header">
              <img src="./logo.png" alt="QuickHire Logo" />
              <h1>Welcome Back</h1>
              {error && <div className="login-error-message">{error}</div>}
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="login-input-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="login-forgot-password-container">
                <Link to="/" className="login-forgot-password-link">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className={`login-btn ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log In"}
              </button>
            </form>

            <div className="login-links">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="login-signup-link">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
