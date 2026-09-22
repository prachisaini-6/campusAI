import Sidebar from "../components/Sidebar";

function Applications() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="applications-header">
          <span>APPLICATION TRACKER</span>
          <h1>My Applications</h1>
          <p>
            Track all your applications and their current status.
          </p>
        </div>

        <div className="application-stats">

          <div>
            <span>📄</span>
            <h2>8</h2>
            <p>Total Applications</p>
          </div>

          <div>
            <span>⏳</span>
            <h2>3</h2>
            <p>Pending</p>
          </div>

          <div>
            <span>🔍</span>
            <h2>3</h2>
            <p>In Review</p>
          </div>

          <div>
            <span>✓</span>
            <h2>2</h2>
            <p>Selected</p>
          </div>

        </div>

        <div className="applications-toolbar">

          <div className="application-tabs">
            <button className="tab-active">All</button>
            <button>Pending</button>
            <button>In Review</button>
            <button>Selected</button>
            <button>Rejected</button>
          </div>

          <select>
            <option>Latest</option>
            <option>Oldest</option>
            <option>Deadline</option>
          </select>

        </div>

        <div className="applications-list">

          <div className="application-card">

            <div className="application-company">
              <div className="company-logo">G</div>

              <div>
                <h3>Frontend Developer Intern</h3>
                <p>Google • Remote</p>
              </div>
            </div>

            <div className="application-info">
              <span>Applied</span>
              <strong>02 Sep 2026</strong>
            </div>

            <span className="application-status pending">
              Pending
            </span>

            <button className="application-view">
              View
            </button>

          </div>

          <div className="application-card">

            <div className="application-company">
              <div className="company-logo">M</div>

              <div>
                <h3>Software Developer Intern</h3>
                <p>Microsoft • Bangalore</p>
              </div>
            </div>

            <div className="application-info">
              <span>Applied</span>
              <strong>28 Aug 2026</strong>
            </div>

            <span className="application-status selected">
              Selected
            </span>

            <button className="application-view">
              View
            </button>

          </div>

          <div className="application-card">

            <div className="application-company">
              <div className="company-logo">T</div>

              <div>
                <h3>Web Development Intern</h3>
                <p>Tech Company • Delhi</p>
              </div>
            </div>

            <div className="application-info">
              <span>Applied</span>
              <strong>25 Aug 2026</strong>
            </div>

            <span className="application-status review">
              In Review
            </span>

            <button className="application-view">
              View
            </button>

          </div>

          <div className="application-card">

            <div className="application-company">
              <div className="company-logo">A</div>

              <div>
                <h3>AI Developer Internship</h3>
                <p>AI Startup • Remote</p>
              </div>
            </div>

            <div className="application-info">
              <span>Applied</span>
              <strong>20 Aug 2026</strong>
            </div>

            <span className="application-status rejected">
              Rejected
            </span>

            <button className="application-view">
              View
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Applications;