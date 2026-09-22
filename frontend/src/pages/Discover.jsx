import Sidebar from "../components/Sidebar";

function Discover() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <div className="discover-header">
          <div>
            <span className="discover-title">EXPLORE OPPORTUNITIES</span>
            <h1>Discover Opportunities</h1>
            <p>
              Find internships, hackathons, scholarships and courses
              that match your career goals.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="discover-search">
          <input
            type="text"
            placeholder="🔎  Search opportunities..."
          />

          <select>
            <option>All Categories</option>
            <option>Internships</option>
            <option>Hackathons</option>
            <option>Scholarships</option>
            <option>Courses</option>
          </select>

          <select>
            <option>All Locations</option>
            <option>Remote</option>
            <option>Delhi</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
          </select>

          <button>Search</button>
        </div>

        {/* Category Buttons */}
        <div className="category-filter">

          <button className="category-active">
            All
          </button>

          <button>💼 Internships</button>
          <button>🏆 Hackathons</button>
          <button>🎓 Scholarships</button>
          <button>📚 Courses</button>

        </div>

        {/* Results Header */}
        <div className="discover-results">

          <div>
            <span>AI MATCHED</span>
            <h2>Opportunities For You</h2>
          </div>

          <select>
            <option>Best Match</option>
            <option>Newest</option>
            <option>Deadline Soon</option>
          </select>

        </div>

        {/* Opportunity Cards */}
        <div className="discover-grid">

          <div className="discover-card">

            <div className="discover-card-top">
              <div className="company-logo">G</div>
              <span className="match-badge">92% Match</span>
            </div>

            <h3>Frontend Developer Intern</h3>

            <p className="company-name">
              Google • Remote
            </p>

            <p className="card-description">
              Work on modern web applications and gain
              practical experience with frontend technologies.
            </p>

            <div className="discover-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <div className="discover-card-bottom">
              <span>📅 Deadline: 15 Oct</span>
              <button>View Details</button>
            </div>

          </div>

          <div className="discover-card">

            <div className="discover-card-top">
              <div className="company-logo">M</div>
              <span className="match-badge">87% Match</span>
            </div>

            <h3>AI & Web Hackathon</h3>

            <p className="company-name">
              Microsoft • Online
            </p>

            <p className="card-description">
              Build innovative solutions using AI,
              web technologies and modern development tools.
            </p>

            <div className="discover-tags">
              <span>AI</span>
              <span>React</span>
              <span>Python</span>
            </div>

            <div className="discover-card-bottom">
              <span>📅 Deadline: 20 Oct</span>
              <button>View Details</button>
            </div>

          </div>

          <div className="discover-card">

            <div className="discover-card-top">
              <div className="company-logo">C</div>
              <span className="match-badge">84% Match</span>
            </div>

            <h3>Full Stack Development</h3>

            <p className="company-name">
              Coursera • Online
            </p>

            <p className="card-description">
              Learn full-stack development and build
              real-world projects using modern technologies.
            </p>

            <div className="discover-tags">
              <span>MERN</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="discover-card-bottom">
              <span>📅 Deadline: 25 Oct</span>
              <button>View Details</button>
            </div>

          </div>

          <div className="discover-card">

            <div className="discover-card-top">
              <div className="company-logo">T</div>
              <span className="match-badge">79% Match</span>
            </div>

            <h3>Software Developer Internship</h3>

            <p className="company-name">
              Tech Company • Bangalore
            </p>

            <p className="card-description">
              Work with a development team and contribute
              to real software projects.
            </p>

            <div className="discover-tags">
              <span>Java</span>
              <span>SQL</span>
              <span>Git</span>
            </div>

            <div className="discover-card-bottom">
              <span>📅 Deadline: 30 Oct</span>
              <button>View Details</button>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Discover;