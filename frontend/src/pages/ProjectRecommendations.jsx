import Sidebar from "../components/Sidebar";

function ProjectRecommendations() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="project-page-header">
          <div>
            <span>AI PROJECT RECOMMENDATIONS</span>
            <h1>Projects For You</h1>
            <p>
              Build projects that match your skills and
              improve your resume.
            </p>
          </div>

          <select>
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="project-info">
          <div>
            <span>✦</span>
            <div>
              <h3>Personalized Project Ideas</h3>
              <p>
                These projects are suggested based on your
                current skills and career interests.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section-title">
          <div>
            <span>RECOMMENDED PROJECTS</span>
            <h2>Build Your Portfolio</h2>
          </div>
        </div>

        <div className="project-grid">

          <div className="project-card">

            <div className="project-card-top">
              <div className="project-icon">🛒</div>
              <span className="project-level">Intermediate</span>
            </div>

            <h3>E-Commerce Website</h3>

            <p>
              Build a modern online shopping website with
              product search, categories and cart functionality.
            </p>

            <div className="project-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>

            <div className="project-bottom">
              <span>⭐ Resume Value: High</span>
              <button>View Project →</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-card-top">
              <div className="project-icon">💼</div>
              <span className="project-level">Intermediate</span>
            </div>

            <h3>Job & Internship Portal</h3>

            <p>
              Create a platform where students can search,
              save and apply for internships and jobs.
            </p>

            <div className="project-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>

            <div className="project-bottom">
              <span>⭐ Resume Value: High</span>
              <button>View Project →</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-card-top">
              <div className="project-icon">🤖</div>
              <span className="project-level">Advanced</span>
            </div>

            <h3>AI Career Assistant</h3>

            <p>
              Build an AI-powered assistant that helps students
              with career questions and opportunity discovery.
            </p>

            <div className="project-skills">
              <span>React</span>
              <span>Node.js</span>
              <span>AI</span>
              <span>API</span>
            </div>

            <div className="project-bottom">
              <span>⭐ Resume Value: Very High</span>
              <button>View Project →</button>
            </div>

          </div>

          <div className="project-card">

            <div className="project-card-top">
              <div className="project-icon">📊</div>
              <span className="project-level">Beginner</span>
            </div>

            <h3>Student Performance Dashboard</h3>

            <p>
              Create a dashboard to display student marks,
              attendance and academic performance.
            </p>

            <div className="project-skills">
              <span>JavaScript</span>
              <span>Charts</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="project-bottom">
              <span>⭐ Resume Value: Medium</span>
              <button>View Project →</button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default ProjectRecommendations;