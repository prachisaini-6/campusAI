import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="badge">
            ✨ AI-Powered Career Platform
          </div>

          <h1>
            Discover Opportunities
            <span> Built For Your Future.</span>
          </h1>

          <p>
            CampusAI helps students discover internships, hackathons,
            scholarships, courses and projects based on their skills,
            interests and career goals.
          </p>

          <div className="hero-buttons">
            <Link to="/discover" className="primary-button">
              Explore Opportunities →
            </Link>

            <Link to="/register" className="outline-button">
              Get Started
            </Link>
          </div>

          <div className="hero-points">
            <span>✓ Smart Matching</span>
            <span>✓ Deadline Tracking</span>
            <span>✓ AI Career Assistance</span>
          </div>

        </div>

        {/* AI Card */}
        <div className="ai-visual">

          <div className="glow"></div>

          <div className="ai-card">

            <div className="ai-card-header">
              <div className="ai-icon">✦</div>

              <div>
                <h3>AI Opportunity Match</h3>
                <p>Personalized for you</p>
              </div>
            </div>

            <div className="match-item">
              <div>
                <strong>Frontend Developer</strong>
                <small>React • JavaScript</small>
              </div>
              <b>92%</b>
            </div>

            <div className="match-item">
              <div>
                <strong>AI Hackathon</strong>
                <small>Python • AI • ML</small>
              </div>
              <b>87%</b>
            </div>

            <div className="match-item">
              <div>
                <strong>Web Development Course</strong>
                <small>HTML • CSS • JS</small>
              </div>
              <b>81%</b>
            </div>

            <div className="ai-status">
              <span>●</span>
              AI is finding opportunities for you...
            </div>

          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="stats-section">

        <div>
          <h2>500+</h2>
          <p>Opportunities</p>
        </div>

        <div>
          <h2>100+</h2>
          <p>Students</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Companies</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>AI Assistance</p>
        </div>

      </section>


      {/* Features */}
      <section className="section">

        <div className="section-heading">
          <span>WHY CAMPUSAI?</span>
          <h2>Everything You Need To Grow Your Career</h2>
          <p>
            One intelligent platform to discover, track and manage
            your career opportunities.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Recommendations</h3>
            <p>
              AI recommends opportunities according to your skills,
              interests and career goals.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Deadline Tracking</h3>
            <p>
              Keep track of application deadlines and never miss
              an important opportunity.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Career Assistant</h3>
            <p>
              Get AI-powered help with resumes, applications and
              interview preparation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Career Insights</h3>
            <p>
              Understand your progress and discover areas where
              you can improve your profile.
            </p>
          </div>

        </div>

      </section>


      {/* How It Works */}
      <section className="how-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Your Career Journey Starts Here</h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Create Profile</h3>
            <p>
              Add your education, skills, interests and career goals.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Get AI Matches</h3>
            <p>
              CampusAI analyzes your profile and finds suitable
              opportunities.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Apply & Grow</h3>
            <p>
              Save opportunities, apply and track your career progress.
            </p>
          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="section">

        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Opportunities For Every Student</h2>
        </div>

        <div className="category-grid">

          <div className="category-card">
            💼
            <h3>Internships</h3>
            <p>Gain real-world experience.</p>
          </div>

          <div className="category-card">
            🏆
            <h3>Hackathons</h3>
            <p>Build, compete and innovate.</p>
          </div>

          <div className="category-card">
            🎓
            <h3>Scholarships</h3>
            <p>Find financial opportunities.</p>
          </div>

          <div className="category-card">
            📚
            <h3>Courses</h3>
            <p>Upgrade your skills.</p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <div>
          <span>READY TO START?</span>

          <h2>
            Your Next Opportunity
            <br />
            Could Be One Click Away.
          </h2>

          <p>
            Create your profile and let CampusAI discover
            opportunities made for you.
          </p>

          <Link to="/register" className="cta-button">
            Create Your Free Profile →
          </Link>
        </div>

      </section>


      {/* Footer */}
      <footer className="footer">

        <div>
          <h2>CampusAI</h2>
          <p>
            AI-powered opportunity discovery platform for students.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/discover">Opportunities</Link>
          <Link to="/recommendations">Recommendations</Link>
          <Link to="/login">Login</Link>
        </div>

        <p className="copyright">
          © 2026 CampusAI. All rights reserved.
        </p>

      </footer>

    </>
  );
}

export default Home;