import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function EditProfile() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "Student Name",
    email: "student@example.com",
    phone: "",
    education: "BCA",
    about: "",
    skills: "HTML, CSS, JavaScript, React",
    interests: "Frontend Development, Full Stack Development"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile saved successfully!");
    navigate("/profile");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="edit-profile-header">
          <div>
            <span>ACCOUNT SETTINGS</span>
            <h1>Edit Profile</h1>
            <p>Update your personal and career information.</p>
          </div>
        </div>

        <form
          className="edit-profile-form"
          onSubmit={handleSubmit}
        >

          <section className="edit-profile-section">

            <h2>Personal Information</h2>

            <div className="form-grid">

              <div className="profile-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="profile-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="profile-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div className="profile-form-group">
                <label>Education</label>
                <input
                  type="text"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                />
              </div>

            </div>

          </section>

          <section className="edit-profile-section">

            <h2>About Me</h2>

            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
            />

          </section>

          <section className="edit-profile-section">

            <h2>Skills</h2>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Example: HTML, CSS, JavaScript, React"
            />

            <small>
              Separate multiple skills with commas.
            </small>

          </section>

          <section className="edit-profile-section">

            <h2>Career Interests</h2>

            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Example: Frontend Development, AI"
            />

            <small>
              Separate multiple interests with commas.
            </small>

          </section>

          <div className="edit-profile-actions">

            <button
              type="button"
              className="cancel-profile-button"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-profile-button"
            >
              Save Profile
            </button>

          </div>

        </form>

      </main>
    </div>
  );
}

export default EditProfile;