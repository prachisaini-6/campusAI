import Sidebar from "../components/Sidebar";

function Notifications() {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="notifications-header">
          <div>
            <span>STAY UPDATED</span>
            <h1>Notifications</h1>
            <p>Keep track of your latest updates and activities.</p>
          </div>

          <button className="mark-read-button">
            Mark all as read
          </button>
        </div>

        <div className="notification-list">

          <div className="notification-card unread">
            <div className="notification-icon">🎯</div>

            <div className="notification-content">
              <h3>New opportunity matched your profile</h3>
              <p>
                A Frontend Developer Internship matches 92% with
                your skills and interests.
              </p>
              <span>10 minutes ago</span>
            </div>

            <button className="notification-action">
              View
            </button>
          </div>

          <div className="notification-card unread">
            <div className="notification-icon">📅</div>

            <div className="notification-content">
              <h3>Upcoming deadline</h3>
              <p>
                Your Frontend Developer Internship application
                deadline is approaching.
              </p>
              <span>2 hours ago</span>
            </div>

            <button className="notification-action">
              View
            </button>
          </div>

          <div className="notification-card">
            <div className="notification-icon">✓</div>

            <div className="notification-content">
              <h3>Application status updated</h3>
              <p>
                Your application for Frontend Developer Intern
                has been moved to the interview stage.
              </p>
              <span>Yesterday</span>
            </div>

            <button className="notification-action">
              View
            </button>
          </div>

          <div className="notification-card">
            <div className="notification-icon">✨</div>

            <div className="notification-content">
              <h3>New recommendations available</h3>
              <p>
                CampusAI found 5 new opportunities based on your
                profile.
              </p>
              <span>Yesterday</span>
            </div>

            <button className="notification-action">
              View
            </button>
          </div>

          <div className="notification-card">
            <div className="notification-icon">💡</div>

            <div className="notification-content">
              <h3>Complete your profile</h3>
              <p>
                Add your skills and career interests to get better
                opportunity recommendations.
              </p>
              <span>2 days ago</span>
            </div>

            <button className="notification-action">
              View Profile
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Notifications;