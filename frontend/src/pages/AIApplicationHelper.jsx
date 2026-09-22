import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AIApplicationHelper() {
  const [activeTool, setActiveTool] = useState("resume");
  const [text, setText] = useState("");

  const handleGenerate = () => {
    if (!text.trim()) {
      alert("Please enter some information first.");
      return;
    }

    alert("AI feature will be connected with backend later.");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="ai-helper-header">
          <div>
            <span>AI APPLICATION HELPER</span>
            <h1>Build Better Applications</h1>
            <p>
              Get AI-powered help with your resume, cover letter
              and job applications.
            </p>
          </div>
        </div>

        <div className="helper-layout">

          <div className="helper-menu">

            <button
              className={activeTool === "resume" ? "active" : ""}
              onClick={() => setActiveTool("resume")}
            >
              📄 Resume Helper
            </button>

            <button
              className={activeTool === "cover" ? "active" : ""}
              onClick={() => setActiveTool("cover")}
            >
              ✉ Cover Letter
            </button>

            <button
              className={activeTool === "application" ? "active" : ""}
              onClick={() => setActiveTool("application")}
            >
              📝 Application Answers
            </button>

            <button
              className={activeTool === "interview" ? "active" : ""}
              onClick={() => setActiveTool("interview")}
            >
              🎤 Interview Preparation
            </button>

          </div>

          <div className="helper-content">

            {activeTool === "resume" && (
              <>
                <h2>📄 Resume Helper</h2>
                <p>
                  Enter your skills, projects and experience.
                  AI will help improve your resume.
                </p>

                <textarea
                  placeholder="Example: I know HTML, CSS, JavaScript and React..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Improve My Resume →
                </button>
              </>
            )}

            {activeTool === "cover" && (
              <>
                <h2>✉ Cover Letter Generator</h2>
                <p>
                  Enter the company and internship/job details.
                </p>

                <textarea
                  placeholder="Example: I am applying for a Frontend Developer internship..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Generate Cover Letter →
                </button>
              </>
            )}

            {activeTool === "application" && (
              <>
                <h2>📝 Application Answer Helper</h2>
                <p>
                  Get help writing professional answers for
                  application questions.
                </p>

                <textarea
                  placeholder="Enter the application question..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Generate Answer →
                </button>
              </>
            )}

            {activeTool === "interview" && (
              <>
                <h2>🎤 Interview Preparation</h2>
                <p>
                  Enter the role you are preparing for and get
                  AI-generated interview questions.
                </p>

                <textarea
                  placeholder="Example: Frontend Developer Internship"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <button
                  className="generate-button"
                  onClick={handleGenerate}
                >
                  Prepare Me →
                </button>
              </>
            )}

          </div>

        </div>

      </main>
    </div>
  );
}

export default AIApplicationHelper;