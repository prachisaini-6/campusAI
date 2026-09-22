import Sidebar from "../components/Sidebar";

function Saved() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="saved-header">
          <span>YOUR COLLECTION</span>
          <h1>Saved Opportunities</h1>
          <p>
            Keep your important opportunities in one place.
          </p>
        </div>

        <div className="saved-top">
          <div>
            <strong>5</strong>
            <span> Saved Opportunities</span>
          </div>

          <select>
            <option>Recently Saved</option>
            <option>Deadline Soon</option>
            <option>Best Match</option>
          </select>
        </div>

        <div className="saved-grid">

          <div className="saved-card">

            <div className="saved-card-top">
              <div className="company-logo">G</div>

              <button className="heart-button">
                ♥
              </button>
            </div>

            <span className="saved-type">INTERNSHIP</span>

            <h2>Frontend Developer Intern</h2>

            <p className="saved-company">
              Google • Remote
            </p>

            <div className="saved-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="saved-footer">
              <span>📅 15 Oct 2026</span>
              <button>View Details</button>
            </div>

          </div>

          <div className="saved-card">

            <div className="saved-card-top">
              <div className="company-logo">M</div>

              <button className="heart-button">
                ♥
              </button>
            </div>

            <span className="saved-type">HACKATHON</span>

            <h2>AI & Web Hackathon</h2>

            <p className="saved-company">
              Microsoft • Online
            </p>

            <div className="saved-tags">
              <span>AI</span>
              <span>React</span>
              <span>Python</span>
            </div>

            <div className="saved-footer">
              <span>📅 20 Oct 2026</span>
              <button>View Details</button>
            </div>

          </div>

          <div className="saved-card">

            <div className="saved-card-top">
              <div className="company-logo">C</div>

              <button className="heart-button">
                ♥
              </button>
            </div>

            <span className="saved-type">COURSE</span>

            <h2>Full Stack Development</h2>

            <p className="saved-company">
              Coursera • Online
            </p>

            <div className="saved-tags">
              <span>MERN</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="saved-footer">
              <span>📅 25 Oct 2026</span>
              <button>View Details</button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Saved;