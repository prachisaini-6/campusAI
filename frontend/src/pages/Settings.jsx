import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [deadlineNotifications, setDeadlineNotifications] = useState(true);
  const [recommendationNotifications, setRecommendationNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="settings-header">
          <span>ACCOUNT SETTINGS</span>
          <h1>Settings</h1>
          <p>Manage your account preferences and notifications.</p>
        </div>

        <section className="settings-section">
          <h2>Notification Settings</h2>
          <p>Choose which notifications you want to receive.</p>

          <div className="setting-item">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive important updates through email.</p>
            </div>

            <button
              className={emailNotifications ? "toggle active" : "toggle"}
              onClick={() => setEmailNotifications(!emailNotifications)}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h3>Deadline Reminders</h3>
              <p>Get reminders before opportunity deadlines.</p>
            </div>

            <button
              className={deadlineNotifications ? "toggle active" : "toggle"}
              onClick={() => setDeadlineNotifications(!deadlineNotifications)}
            >
              <span></span>
            </button>
          </div>

          <div className="setting-item">
            <div>
              <h3>Opportunity Recommendations</h3>
              <p>Receive new opportunities matching your profile.</p>
            </div>

            <button
              className={
                recommendationNotifications
                  ? "toggle active"
                  : "toggle"
              }
              onClick={() =>
                setRecommendationNotifications(
                  !recommendationNotifications
                )
              }
            >
              <span></span>
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h2>Account Preferences</h2>

          <div className="settings-field">
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="settings-field">
            <label>Opportunity Type</label>
            <select>
              <option>All Opportunities</option>
              <option>Internships</option>
              <option>Hackathons</option>
              <option>Scholarships</option>
              <option>Courses</option>
            </select>
          </div>
        </section>

        <section className="settings-section danger-section">
          <h2>Account</h2>

          <div className="account-action">
            <div>
              <h3>Change Password</h3>
              <p>Update your account password.</p>
            </div>

            <button onClick={() => navigate("/change-password")}>
            Change Password
            </button>   
          </div>

          <div className="account-action">
            <div>
              <h3>Logout</h3>
              <p>Sign out from your CampusAI account.</p>
            </div>

            <button>Logout</button>
          </div>
        </section>

        <button
          className="save-settings-button"
          onClick={handleSave}
        >
          Save Settings
        </button>

      </main>
    </div>
  );
}

export default Settings;