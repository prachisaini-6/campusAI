import Sidebar from "../components/Sidebar";

function Recommendations() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="recommendations-header">
          <div>
            <span>AI POWERED RECOMMENDATIONS</span>
            <h1>Recommended For You</h1>
            <p>
              Opportunities selected based on your skills,
              interests and career goals.
            </p>
          </div>

          <select>
            <option>All Categories</option>
            <option>Internships</option>
            <option>Hackathons</option>
            <option>Courses</option>
            <option>Scholarships</option>
          </select>
        </div>

        <div className="recommendation-info">
          <div>
            <span>✦</span>
            <div>
              <h3>AI Matching</h3>
              <p>
                Our system matches opportunities with your
                profile and skills.
              </p>
            </div>
          </div>

          <strong>86% Average Match</strong>
        </div>

        <div className="recommendation-title">
          <div>
            <span>TOP MATCHES</span>
            <h2>Opportunities For You</h2>
          </div>

          <select>
            <option>Highest Match</option>
            <option>Latest</option>
            <option>Deadline</option>
          </select>
        </div>

        <div className="recommendation-grid">

          <div className="recommendation-card">

            <div className="recommendation-card-top">
              <div className="company-icon">G</div>

              <span className="match-badge">92% Match</span>
            </div>

            <span className="recommendation-category">
              INTERNSHIP
            </span>

            <h3>Frontend Developer Intern</h3>

            <p>Google • Remote</p>

            <div className="recommendation-skills">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="recommendation-bottom">
              <span>📅 15 Oct 2026</span>
              <button>View →</button>
            </div>

          </div>

          <div className="recommendation-card">

            <div className="recommendation-card-top">
              <div className="company-icon">M</div>

              <span className="match-badge">88% Match</span>
            </div>

            <span className="recommendation-category">
              HACKATHON
            </span>

            <h3>Web Development Hackathon</h3>

            <p>Microsoft • Online</p>

            <div className="recommendation-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>HTML</span>
            </div>

            <div className="recommendation-bottom">
              <span>📅 20 Oct 2026</span>
              <button>View →</button>
            </div>

          </div>

          <div className="recommendation-card">

            <div className="recommendation-card-top">
              <div className="company-icon">C</div>

              <span className="match-badge">84% Match</span>
            </div>

            <span className="recommendation-category">
              COURSE
            </span>

            <h3>Full Stack Development</h3>

            <p>Coursera • Online</p>

            <div className="recommendation-skills">
              <span>MERN</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="recommendation-bottom">
              <span>📅 25 Oct 2026</span>
              <button>View →</button>
            </div>

          </div>

          <div className="recommendation-card">

            <div className="recommendation-card-top">
              <div className="company-icon">T</div>

              <span className="match-badge">81% Match</span>
            </div>

            <span className="recommendation-category">
              SCHOLARSHIP
            </span>

            <h3>Women in Technology Scholarship</h3>

            <p>Tech Foundation • Online</p>

            <div className="recommendation-skills">
              <span>Students</span>
              <span>Technology</span>
            </div>

            <div className="recommendation-bottom">
              <span>📅 30 Oct 2026</span>
              <button>View →</button>
            </div>

          </div>

        </div>

        <section className="recommendation-section">

          <div className="recommendation-section-title">
            <div>
              <span>BASED ON YOUR PROFILE</span>
              <h2>Why These Are Recommended</h2>
            </div>
          </div>

          <div className="recommendation-reasons">

            <div className="reason-card">
              <div>💻</div>
              <h3>Your Skills</h3>
              <p>
                Your React, JavaScript and web development
                skills match several opportunities.
              </p>
            </div>

            <div className="reason-card">
              <div>🎯</div>
              <h3>Your Career Goal</h3>
              <p>
                Your interest in frontend and full-stack
                development affects your recommendations.
              </p>
            </div>

            <div className="reason-card">
              <div>📚</div>
              <h3>Your Education</h3>
              <p>
                Opportunities suitable for BCA students
                are prioritized.
              </p>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Recommendations;