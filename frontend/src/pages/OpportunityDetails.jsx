import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function OpportunityDetails() {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="dashboard-main">

        <button
          className="back-button"
          onClick={() => navigate("/discover")}
        >
          ← Back to Opportunities
        </button>

        <div className="opportunity-details">

          <div className="details-main">

            <div className="details-header">

              <div className="details-company-logo">
                G
              </div>

              <div>
                <span className="details-type">
                  INTERNSHIP
                </span>

                <h1>Frontend Developer Intern</h1>

                <p>
                  Google • Remote • Full Time
                </p>
              </div>

            </div>

            <div className="details-section">
              <h2>About the Opportunity</h2>

              <p>
                This internship provides students with an opportunity
                to work on real-world web development projects and gain
                practical experience with modern frontend technologies.
              </p>

              <p>
                You will work with a development team and contribute
                to building user-friendly and scalable web applications.
              </p>
            </div>

            <div className="details-section">

              <h2>Required Skills</h2>

              <div className="details-skills">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Git</span>
              </div>

            </div>

            <div className="details-section">

              <h2>Eligibility</h2>

              <ul>
                <li>BCA / B.Tech / MCA students can apply.</li>
                <li>Basic knowledge of web development.</li>
                <li>Good understanding of JavaScript.</li>
                <li>Students interested in frontend development.</li>
              </ul>

            </div>

          </div>

          <aside className="details-sidebar">

            <div className="match-box">

              <span>AI MATCH</span>

              <strong>92%</strong>

              <p>
                This opportunity matches your
                skills and career interests.
              </p>

            </div>

            <div className="details-card">

              <div className="detail-row">
                <span>📅 Deadline</span>
                <strong>15 Oct 2026</strong>
              </div>

              <div className="detail-row">
                <span>💰 Stipend</span>
                <strong>₹25,000 / month</strong>
              </div>

              <div className="detail-row">
                <span>📍 Location</span>
                <strong>Remote</strong>
              </div>

              <div className="detail-row">
                <span>⏱ Duration</span>
                <strong>3 Months</strong>
              </div>

            </div>

            <button className="apply-button">
              Apply Now →
            </button>

            <button
              className="save-button"
              onClick={() => setSaved(!saved)}
            >
              {saved ? "♥ Saved" : "♡ Save Opportunity"}
            </button>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default OpportunityDetails;