import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    alert("AI Assistant backend will be connected later.");
    setMessage("");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">

        <div className="ai-header">
          <div>
            <span>AI CAREER ASSISTANT</span>
            <h1>How can I help you?</h1>
            <p>
              Ask questions about careers, internships, skills and
              opportunities.
            </p>
          </div>
        </div>

        <div className="ai-container">

          <div className="ai-welcome">
            <div className="ai-icon">✦</div>

            <h2>Hi! I'm your CampusAI Assistant 👋</h2>

            <p>
              I can help you discover opportunities, improve your
              skills and plan your career journey.
            </p>
          </div>

          <div className="suggestion-title">
            Try asking me
          </div>

          <div className="ai-suggestions">
            <button>Which internship is best for my skills?</button>
            <button>What skills should I learn for frontend development?</button>
            <button>How can I prepare for a technical interview?</button>
            <button>Suggest projects for my resume</button>
          </div>

          <div className="chat-area">

            <div className="chat-message ai-message">
              <div className="chat-avatar">✦</div>

              <div className="chat-bubble">
                Hello! I'm here to help you with your career and
                opportunities. What would you like to know?
              </div>
            </div>

          </div>

          <form className="ai-input-area" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Ask me anything about your career..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">
              Send →
            </button>
          </form>

        </div>

      </main>
    </div>
  );
}

export default AIAssistant;