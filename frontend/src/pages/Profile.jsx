import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="profile-page-header">
          <div>
            <span>MY ACCOUNT</span>
            <h1>My Profile</h1>
            <p>Manage your information and career profile.</p>
          </div>

          <button className="edit-profile-button">
            Edit Profile
          </button>
        </div>

        <div className="profile-layout">

          <section className="profile-main-card">

            <div className="profile-cover"></div>

            <div className="profile-user">

              <div className="profile-big-avatar">
                S
              </div>

              <div>
                <h2>Student Name</h2>
                <p>BCA Student</p>
                <span>📍 Bareilly, India</span>
              </div>

            </div>

            <div className="profile-section">

              <h2>About Me</h2>

              <p>
                I am a BCA student interested in web development,
                software development and emerging technologies.
                I am currently learning the MERN stack and building
                projects to improve my practical skills.
              </p>

            </div>

            <div className="profile-section">

              <h2>Education</h2>

              <div className="education-item">
                <div className="education-icon">
                  🎓
                </div>

                <div>
                  <h3>Bachelor of Computer Applications</h3>
                  <p>Invertis University</p>
                  <span>2024 - 2027</span>
                </div>
              </div>

            </div>

            <div className="profile-section">

              <h2>Skills</h2>

              <div className="profile-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Git</span>
              </div>

            </div>

            <div className="profile-section">

              <h2>Career Interests</h2>

              <div className="interest-list">
                <span>Frontend Development</span>
                <span>Full Stack Development</span>
                <span>Software Development</span>
                <span>AI & Technology</span>
              </div>

            </div>

          </section>

          <aside className="profile-side">

            <div className="profile-completion">

              <h2>Profile Strength</h2>

              <div className="completion-circle">
                <strong>72%</strong>
              </div>

              <p>
                Complete your profile to get better
                opportunity recommendations.
              </p>

              <button>
                Complete Profile →
              </button>

            </div>

            <div className="resume-card">

              <div className="resume-icon">
                📄
              </div>

              <div>
                <h3>My Resume</h3>
                <p>Resume.pdf</p>
              </div>

              <button>View</button>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}

export default Profile;