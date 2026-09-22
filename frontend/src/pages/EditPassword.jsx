import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    alert("Password changed successfully!");

    navigate("/settings");
  };

  return (
    <div className="auth-page">

      <div className="auth-box">

        <div className="auth-logo">CampusAI</div>

        <h1>Change Password</h1>

        <p className="auth-subtitle">
          Update your account password.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Current Password</label>

          <input
            type="password"
            placeholder="Enter current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <label>New Password</label>

          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="auth-button"
          >
            Change Password
          </button>

        </form>

        <button
          className="back-button"
          onClick={() => navigate("/settings")}
        >
          ← Back to Settings
        </button>

      </div>

    </div>
  );
}

export default ChangePassword;