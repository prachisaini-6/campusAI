import Sidebar from "../components/Sidebar";

function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="admin-header">
          <div>
            <span>ADMIN PANEL</span>
            <h1>Admin Dashboard</h1>
            <p>Manage students, opportunities and applications.</p>
          </div>

          <div className="admin-badge">
            Administrator
          </div>
        </div>

        <div className="admin-stats">

          <div className="admin-stat-card">
            <div className="admin-stat-icon">👨‍🎓</div>
            <div>
              <span>Total Students</span>
              <h2>250</h2>
              <p>+12 this month</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">💼</div>
            <div>
              <span>Opportunities</span>
              <h2>48</h2>
              <p>8 added this month</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">📄</div>
            <div>
              <span>Applications</span>
              <h2>326</h2>
              <p>24 pending review</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">✓</div>
            <div>
              <span>Active Opportunities</span>
              <h2>35</h2>
              <p>Currently accepting</p>
            </div>
          </div>

        </div>

        <div className="admin-content-grid">

          <section className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <span>RECENT ACTIVITY</span>
                <h2>Recent Applications</h2>
              </div>

              <button>View All →</button>
            </div>

            <div className="admin-application">

              <div className="admin-avatar">A</div>

              <div className="admin-application-info">
                <h3>Student A</h3>
                <p>Frontend Developer Intern</p>
              </div>

              <span className="admin-status pending">
                Pending
              </span>

            </div>

            <div className="admin-application">

              <div className="admin-avatar">R</div>

              <div className="admin-application-info">
                <h3>Student R</h3>
                <p>Software Developer Intern</p>
              </div>

              <span className="admin-status selected">
                Selected
              </span>

            </div>

            <div className="admin-application">

              <div className="admin-avatar">P</div>

              <div className="admin-application-info">
                <h3>Student P</h3>
                <p>Web Development Hackathon</p>
              </div>

              <span className="admin-status review">
                In Review
              </span>

            </div>

            <div className="admin-application">

              <div className="admin-avatar">K</div>

              <div className="admin-application-info">
                <h3>Student K</h3>
                <p>AI Internship</p>
              </div>

              <span className="admin-status pending">
                Pending
              </span>

            </div>

          </section>

          <section className="admin-panel">

            <div className="admin-panel-header">
              <div>
                <span>OPPORTUNITIES</span>
                <h2>Recent Opportunities</h2>
              </div>

              <button>View All →</button>
            </div>

            <div className="admin-opportunity">
              <div className="admin-opportunity-icon">
                G
              </div>

              <div>
                <h3>Frontend Developer Intern</h3>
                <p>Google • Remote</p>
              </div>
            </div>

            <div className="admin-opportunity">
              <div className="admin-opportunity-icon">
                M
              </div>

              <div>
                <h3>Web Development Hackathon</h3>
                <p>Microsoft • Online</p>
              </div>
            </div>

            <div className="admin-opportunity">
              <div className="admin-opportunity-icon">
                C
              </div>

              <div>
                <h3>Full Stack Development Course</h3>
                <p>Coursera • Online</p>
              </div>
            </div>

            <div className="admin-opportunity">
              <div className="admin-opportunity-icon">
                T
              </div>

              <div>
                <h3>AI Developer Internship</h3>
                <p>Tech Company • Remote</p>
              </div>
            </div>

          </section>

        </div>

        <section className="admin-panel admin-quick-panel">

          <div className="admin-panel-header">
            <div>
              <span>QUICK ACTIONS</span>
              <h2>Manage CampusAI</h2>
            </div>
          </div>

          <div className="admin-quick-actions">

            <button>
              <span>👨‍🎓</span>
              Manage Students
            </button>

            <button>
              <span>💼</span>
              Manage Opportunities
            </button>

            <button>
              <span>➕</span>
              Add Opportunity
            </button>

            <button>
              <span>📄</span>
              Manage Applications
            </button>

          </div>

        </section>

      </main>
    </div>
  );
}

export default AdminDashboard;