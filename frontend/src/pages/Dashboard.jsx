import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="dashboard-top">
          <div>
            <p className="dashboard-small">WELCOME BACK 👋</p>
            <h1>Good Morning, Student!</h1>
            <p>Here is what's happening with your career journey.</p>
          </div>

          <div className="dashboard-profile">
            <span>🔔</span>
            <div className="profile-avatar">S</div>
          </div>
        </div>

        <div className="dashboard-banner">
          <div>
            <span>✨ AI CAREER ASSISTANT</span>
            <h2>Find opportunities made for you.</h2>
            <p>
              CampusAI is analyzing your skills and interests
              to find relevant opportunities.
            </p>
            <button>Explore Recommendations →</button>
          </div>

          <div className="banner-icon">✦</div>
        </div>

        <div className="dashboard-stats">

          <div className="dashboard-stat">
            <span>💼</span>
            <div>
              <h3>12</h3>
              <p>Recommended</p>
            </div>
          </div>

          <div className="dashboard-stat">
            <span>❤️</span>
            <div>
              <h3>5</h3>
              <p>Saved</p>
            </div>
          </div>

          <div className="dashboard-stat">
            <span>📄</span>
            <div>
              <h3>3</h3>
              <p>Applications</p>
            </div>
          </div>

          <div className="dashboard-stat">
            <span>📅</span>
            <div>
              <h3>4</h3>
              <p>Deadlines</p>
            </div>
          </div>

        </div>

        <section className="dashboard-section">

          <div className="section-title">
            <div>
              <span>FOR YOU</span>
              <h2>Recommended Opportunities</h2>
            </div>

            <button>View All →</button>
          </div>

          <div className="opportunity-grid">

            <div className="opportunity-card">
              <div className="opportunity-top">
                <span className="company-icon">G</span>
                <span className="match">92% Match</span>
              </div>

              <h3>Frontend Developer Intern</h3>

              <p>Google • Remote</p>

              <div className="skills">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <div className="opportunity-bottom">
                <span>📅 15 Oct 2026</span>
                <button>View</button>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-top">
                <span className="company-icon">M</span>
                <span className="match">87% Match</span>
              </div>

              <h3>Web Development Hackathon</h3>

              <p>Microsoft • Online</p>

              <div className="skills">
                <span>HTML</span>
                <span>React</span>
                <span>Node.js</span>
              </div>

              <div className="opportunity-bottom">
                <span>📅 20 Oct 2026</span>
                <button>View</button>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-top">
                <span className="company-icon">C</span>
                <span className="match">81% Match</span>
              </div>

              <h3>Full Stack Development Course</h3>

              <p>Coursera • Online</p>

              <div className="skills">
                <span>MERN</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>

              <div className="opportunity-bottom">
                <span>📅 25 Oct 2026</span>
                <button>View</button>
              </div>
            </div>

          </div>

        </section>

        <div className="dashboard-columns">

          <section className="dashboard-panel">
            <div className="panel-heading">
              <div>
                <span>TRACKING</span>
                <h2>Application Status</h2>
              </div>
              <button>View All</button>
            </div>

            <div className="application-item">
              <div>
                <h3>Frontend Developer Intern</h3>
                <p>Google</p>
              </div>
              <span className="status pending">Pending</span>
            </div>

            <div className="application-item">
              <div>
                <h3>Software Developer Intern</h3>
                <p>Microsoft</p>
              </div>
              <span className="status selected">Selected</span>
            </div>

            <div className="application-item">
              <div>
                <h3>Web Development Intern</h3>
                <p>Startup Company</p>
              </div>
              <span className="status review">In Review</span>
            </div>

          </section>

          <section className="dashboard-panel">

            <div className="panel-heading">
              <div>
                <span>UPCOMING</span>
                <h2>Deadlines</h2>
              </div>
              <button>View All</button>
            </div>

            <div className="deadline-item">
              <div className="deadline-date">
                <strong>15</strong>
                <small>OCT</small>
              </div>

              <div>
                <h3>Frontend Developer Intern</h3>
                <p>Google</p>
              </div>
            </div>

            <div className="deadline-item">
              <div className="deadline-date">
                <strong>20</strong>
                <small>OCT</small>
              </div>

              <div>
                <h3>Web Development Hackathon</h3>
                <p>Microsoft</p>
              </div>
            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;