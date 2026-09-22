import Sidebar from "../components/Sidebar";

function Deadlines() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="deadlines-header">
          <div>
            <span>TRACK YOUR DEADLINES</span>
            <h1>Upcoming Deadlines</h1>
            <p>Never miss an important opportunity deadline.</p>
          </div>

          <select>
            <option>All Opportunities</option>
            <option>Internships</option>
            <option>Hackathons</option>
            <option>Scholarships</option>
            <option>Courses</option>
          </select>
        </div>

        <div className="deadline-summary">

          <div className="deadline-summary-card">
            <span>📅</span>
            <div>
              <h2>4</h2>
              <p>Upcoming</p>
            </div>
          </div>

          <div className="deadline-summary-card">
            <span>⚠️</span>
            <div>
              <h2>2</h2>
              <p>This Week</p>
            </div>
          </div>

          <div className="deadline-summary-card">
            <span>✓</span>
            <div>
              <h2>6</h2>
              <p>Completed</p>
            </div>
          </div>

        </div>

        <section className="deadline-section">

          <div className="deadline-section-title">
            <div>
              <span>UPCOMING</span>
              <h2>Important Deadlines</h2>
            </div>

            <select>
              <option>Sort by Date</option>
              <option>Nearest First</option>
              <option>Latest First</option>
            </select>
          </div>

          <div className="deadline-list">

            <div className="deadline-card urgent">
              <div className="deadline-date-box">
                <strong>15</strong>
                <span>OCT</span>
              </div>

              <div className="deadline-info">
                <span className="deadline-category">INTERNSHIP</span>
                <h3>Frontend Developer Intern</h3>
                <p>Google • Remote</p>

                <div className="deadline-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="deadline-right">
                <span className="days-left urgent-text">
                  26 Days Left
                </span>
                <button>View Opportunity →</button>
              </div>
            </div>

            <div className="deadline-card">
              <div className="deadline-date-box">
                <strong>20</strong>
                <span>OCT</span>
              </div>

              <div className="deadline-info">
                <span className="deadline-category">HACKATHON</span>
                <h3>Web Development Hackathon</h3>
                <p>Microsoft • Online</p>

                <div className="deadline-tags">
                  <span>HTML</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </div>

              <div className="deadline-right">
                <span className="days-left">
                  31 Days Left
                </span>
                <button>View Opportunity →</button>
              </div>
            </div>

            <div className="deadline-card">
              <div className="deadline-date-box">
                <strong>25</strong>
                <span>OCT</span>
              </div>

              <div className="deadline-info">
                <span className="deadline-category">COURSE</span>
                <h3>Full Stack Development Course</h3>
                <p>Coursera • Online</p>

                <div className="deadline-tags">
                  <span>MERN</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="deadline-right">
                <span className="days-left">
                  36 Days Left
                </span>
                <button>View Opportunity →</button>
              </div>
            </div>

            <div className="deadline-card">
              <div className="deadline-date-box">
                <strong>30</strong>
                <span>OCT</span>
              </div>

              <div className="deadline-info">
                <span className="deadline-category">SCHOLARSHIP</span>
                <h3>Women in Technology Scholarship</h3>
                <p>Tech Foundation • Online</p>

                <div className="deadline-tags">
                  <span>Students</span>
                  <span>Technology</span>
                </div>
              </div>

              <div className="deadline-right">
                <span className="days-left">
                  41 Days Left
                </span>
                <button>View Opportunity →</button>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Deadlines;