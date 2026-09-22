import Sidebar from "../components/Sidebar";

function Insights() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="insights-header">
          <div>
            <span>CAREER ANALYTICS</span>
            <h1>Your Insights</h1>
            <p>
              Understand your progress and improve your career journey.
            </p>
          </div>

          <select>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
          </select>
        </div>

        <div className="insights-stats">

          <div className="insight-stat">
            <span>📄</span>
            <div>
              <h2>8</h2>
              <p>Applications</p>
              <small>+3 this month</small>
            </div>
          </div>

          <div className="insight-stat">
            <span>❤️</span>
            <div>
              <h2>12</h2>
              <p>Saved Opportunities</p>
              <small>+5 this month</small>
            </div>
          </div>

          <div className="insight-stat">
            <span>🎯</span>
            <div>
              <h2>86%</h2>
              <p>Average Match</p>
              <small>+8% improvement</small>
            </div>
          </div>

          <div className="insight-stat">
            <span>⭐</span>
            <div>
              <h2>72%</h2>
              <p>Profile Strength</p>
              <small>Complete your profile</small>
            </div>
          </div>

        </div>

        <div className="insights-grid">

          <section className="insight-panel">
            <div className="insight-panel-header">
              <div>
                <span>ACTIVITY</span>
                <h2>Application Activity</h2>
              </div>
            </div>

            <div className="activity-chart">

              <div className="chart-bars">
                <div className="bar-group">
                  <div className="bar bar-1"></div>
                  <span>Mon</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-2"></div>
                  <span>Tue</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-3"></div>
                  <span>Wed</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-4"></div>
                  <span>Thu</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-5"></div>
                  <span>Fri</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-6"></div>
                  <span>Sat</span>
                </div>

                <div className="bar-group">
                  <div className="bar bar-7"></div>
                  <span>Sun</span>
                </div>
              </div>

            </div>
          </section>

          <section className="insight-panel">

            <div className="insight-panel-header">
              <div>
                <span>SKILLS</span>
                <h2>Your Top Skills</h2>
              </div>
            </div>

            <div className="skill-progress">
              <div>
                <span>JavaScript</span>
                <strong>85%</strong>
              </div>
              <div className="progress">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="skill-progress">
              <div>
                <span>React</span>
                <strong>78%</strong>
              </div>
              <div className="progress">
                <div style={{ width: "78%" }}></div>
              </div>
            </div>

            <div className="skill-progress">
              <div>
                <span>HTML / CSS</span>
                <strong>90%</strong>
              </div>
              <div className="progress">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="skill-progress">
              <div>
                <span>Node.js</span>
                <strong>55%</strong>
              </div>
              <div className="progress">
                <div style={{ width: "55%" }}></div>
              </div>
            </div>

          </section>

        </div>

        <section className="career-insight-box">

          <div className="career-insight-icon">
            ✦
          </div>

          <div>
            <span>AI CAREER INSIGHT</span>
            <h2>Improve your backend skills</h2>
            <p>
              Based on your current profile and saved opportunities,
              learning Node.js and MongoDB could help you match more
              full-stack opportunities.
            </p>
          </div>

          <button>
            Explore Courses →
          </button>

        </section>

      </main>
    </div>
  );
}

export default Insights;